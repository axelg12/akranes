import React, { Fragment, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Drawer from '@material-ui/core/Drawer';
import { IMarker } from '../interfaces/interfaces';
import DrawerContent from '../Drawer';
import markers from './markers';
import styles from './styles';
import './Map.css';

function Map() {
  const onClick = (marker: IMarker) => {
    setMarker(marker);
  };
  const [selectedMarker, setMarker] = useState<null | IMarker>(null);
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
  const center = { lat: 64.3152673, lng: -22.0618914 };
  const zoom = 14;
  const containerStyle = {
    height: 'calc(100vh - 70px)',
    width: '100%',
  };
  return (
    <Fragment>
      <LoadScript googleMapsApiKey="AIzaSyBQfmIUDAO68X06yf2IX6M_sjQV5J-VFUE">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={{
            styles: styles as google.maps.MapTypeStyle[],
            streetViewControl: false,
            disableDefaultUI: true,
          }}
        >
          {markers.map((marker: IMarker | undefined, index) => {
            if (marker) {
              return (
                <Marker
                  key={index}
                  onClick={() => onClick(marker)}
                  position={marker.position}
                  icon={marker.img}
                />
              );
            }
          })}
        </GoogleMap>
      </LoadScript>
      <Drawer
        anchor="left"
        open={selectedMarker !== null}
        onClose={() => {
          setMarker(null);
        }}
      >
        {selectedMarker && <DrawerContent marker={selectedMarker} />}
      </Drawer>
    </Fragment>
  );
}

export default Map;
