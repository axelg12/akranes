import React, { useState, useEffect, Fragment, useRef } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from '@react-google-maps/api';
import { options, getMarkersByPath, getPathInfo } from './paths';
import Drawer from '@material-ui/core/Drawer';
import { IMarker } from '../interfaces/interfaces';
import DrawerContent from '../Drawer';
import ListView from '../ListView';
import markers from './markers';
import styles from './styles';
import './Map.css';

function Map({
  pathId = 'All',
  infoClick,
}: {
  pathId: string;
  infoClick: boolean;
}) {
  const onClick = (marker: IMarker) => {
    setMarker(marker);
  };
  const mapRef: any = useRef(null);
  const [position, setPosition] = useState({
    lat: 64.3152673,
    lng: -22.0618914,
  });
  const [selectedMarker, setMarker] = useState<null | IMarker>(null);
  const [googleMap, setMap] = useState<any>(null);
  useEffect(() => {
    if (window.location.hash) {
      // Remove the hash
      const id = window.location.hash.substring(1);
      const foundMarker = markers.find((marker) => {
        if (marker && marker.id) {
          return marker.id === id;
        }
        return false;
      });
      if (foundMarker) {
        setMarker(foundMarker);
      }
    }
  }, []);
  useEffect(() => {
    const pathInfo = getPathInfo(pathId);
    setPosition(pathInfo.position);
    setMarker(getPathInfo(pathId));
  }, [infoClick, pathId]);
  const zoom = 14;
  const containerStyle = {
    height: 'calc(100vh - 70px)',
    width: '100%',
  };

  function handleLoad(map: any) {
    mapRef.current = map;
  }

  function handleCenter() {
    if (mapRef && mapRef.current) {
      const newCenter = mapRef.current!.getCenter();
      if (newCenter) {
        setPosition(newCenter.toJSON());
      }
    }
  }

  const markerAndPathInfo = getMarkersByPath(pathId);
  return (
    <Fragment>
      <div className="Map">
        <LoadScript googleMapsApiKey="AIzaSyBQfmIUDAO68X06yf2IX6M_sjQV5J-VFUE">
          <GoogleMap
            onLoad={(map: any) => {
              handleLoad(map);
              setMap(map);
            }}
            onDragEnd={handleCenter}
            mapContainerStyle={containerStyle}
            center={position}
            zoom={zoom}
            options={{
              styles: styles as google.maps.MapTypeStyle[],
              streetViewControl: false,
              disableDefaultUI: true,
              gestureHandling: 'greedy',
            }}
          >
            {markerAndPathInfo.path.polylines.map((polyline, i) => {
              return (
                <Polyline
                  key={i}
                  path={polyline}
                  options={{
                    ...options,
                    strokeColor: markerAndPathInfo.path.color,
                  }}
                />
              );
            })}
            {markers.map((marker: IMarker | undefined, index) => {
              if (marker && markerAndPathInfo.markers.includes(marker.id)) {
                return (
                  <Marker
                    key={index}
                    onClick={() => onClick(marker)}
                    position={marker.position}
                    icon={marker.img}
                  />
                );
              }
              return null;
            })}
          </GoogleMap>
        </LoadScript>
        <Drawer
          className="Map__drawer"
          anchor="left"
          open={selectedMarker !== null}
          onClose={() => {
            setMarker(null);
          }}
        >
          {selectedMarker && <DrawerContent marker={selectedMarker} />}
        </Drawer>
      </div>
      <ListView googleMap={googleMap} pathId={pathId} />
    </Fragment>
  );
}

export default Map;
