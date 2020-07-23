import { getCircleImage } from './imageUtils';
import { IMarker } from '../interfaces/interfaces';
import rawJson from './rawJson.json';
import gudlaug from '../images/gudlaug.jpg';
import breidin from '../images/breidin.jpg';
import elinarsaeti from '../images/elinarsaeti.jpg';
import byggdasafn from '../images/byggdasafn.jpg';
import akrafjall from '../images/akrafjall.jpg';
import langisandur from '../images/langisandur.jpg';
import akratorg from '../images/akratorg.jpg';
import fotboltamenn from '../images/fotboltamenn.jpg';
import strompur from '../images/strompur.jpg';
import golf from '../images/golf.jpg';

export const MARKERS_CONSTANTS = {
  GUDLAUG: 'gudlaug',
  BREIDIN: 'breidin',
  ELINARSAETI: 'elinarsaeti',
  GARDAR: 'gardar',
  AKRAFJALL: 'akrafjall',
  SEMENTSSTROMPUR: 'Sementsstrompur',
  LANGISANDUR: 'langisandur',
  AKRATORG: 'akratorg',
  FOTBOLTAMENN: 'fotboltamenn',
  GOLF: 'golf',
};

const {
  GUDLAUG,
  BREIDIN,
  ELINARSAETI,
  GARDAR,
  AKRAFJALL,
  SEMENTSSTROMPUR,
  LANGISANDUR,
  AKRATORG,
  FOTBOLTAMENN,
  GOLF,
} = MARKERS_CONSTANTS;

function getImgById(id: string) {
  switch (id) {
    case GUDLAUG:
      return gudlaug;
    case BREIDIN:
      return breidin;
    case ELINARSAETI:
      return elinarsaeti;
    case GARDAR:
      return byggdasafn;
    case AKRAFJALL:
      return akrafjall;
    case LANGISANDUR:
      return langisandur;
    case AKRATORG:
      return akratorg;
    case FOTBOLTAMENN:
      return fotboltamenn;
    case SEMENTSSTROMPUR:
      return strompur;
    case GOLF:
      return golf;
    default:
      console.log('id not found', id);
      return gudlaug;
  }
}

const markers = rawJson.map((marker) => {
  if (marker.lat) {
    const markerInfo = {
      id: marker.id,
      position: { lat: Number(marker.lat), lng: Number(marker.lng) },
      info: {
        title: marker.name,
        desc: marker.desc,
        cardImg: getImgById(marker.id),
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
