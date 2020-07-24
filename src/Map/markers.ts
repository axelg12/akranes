import { getCircleImage, getLargeImage } from './imageUtils';
import { IMarker } from '../interfaces/interfaces';
import rawJson from './rawJson.json';

export const MARKERS_CONSTANTS = {
  GUDLAUG: 'gudlaug',
  BREIDIN: 'breidin',
  ELINARSAETI: 'elinarsaeti',
  GARDAR: 'gardar',
  AKRAFJALL: 'akrafjall',
  SEMENTSSTROMPUR: 'sementsstrompur',
  LANGISANDUR: 'langisandur',
  AKRATORG: 'akratorg',
  FOTBOLTAMENN: 'fotboltamenn',
  GOLF: 'golf',
};

const markers = rawJson.map((marker) => {
  if (marker.lat) {
    const markerInfo = {
      id: marker.id,
      position: { lat: Number(marker.lat), lng: Number(marker.lng) },
      info: {
        title: marker.name,
        desc: marker.desc,
        cardImg: getLargeImage(marker.id),
        more: '',
      },
      img: getCircleImage(marker.id),
      paths: marker.paths.split(','),
    };
    if (marker.more) {
      markerInfo.info.more = marker.more;
    }
    return markerInfo as IMarker;
  }
  return {
    id: '',
    position: { lat: 0, lng: 0 },
    info: {
      title: '',
      desc: '',
      cardImg: '',
      more: '',
    },
    img: '',
    paths: [],
  };
});

export default markers;
