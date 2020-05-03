import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from '../Icon';
import markers from './markers';
import styles from './styles';
import './Map.css';

class Map extends Component<
  { center: { lat: number; lng: number }; zoom: number },
  {}
> {
  static defaultProps = {
    center: { lat: 64.3152673, lng: -22.0618914 },
    zoom: 14,
  };
  render() {
    const { center, zoom } = this.props;
    const mapOptions = {
      styles: styles,
    };
    return (
      <div className="Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBQfmIUDAO68X06yf2IX6M_sjQV5J-VFUE' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={mapOptions}
        >
          {markers.map((marker) => (
            <Icon
              className={marker.id}
              lat={marker.position.lat}
              lng={marker.position.lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
