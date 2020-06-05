import rawJson from './rawJson.json';
import gudlaug from '../images/gudlaug.jpg';
import breidin from '../images/breidin.jpg';
import elinarsaeti from '../images/elinarsaeti.jpg';
import byggdasafn from '../images/byggdasafn.jpg';
import akrafjall from '../images/akrafjall.jpg';
import langisandur from '../images/langisandur.jpg';
import akratorg from '../images/akratorg.jpg';

function getImgById(id) {
  switch (id) {
    case 'gudlaug':
      return gudlaug;
    case 'breidin':
      return breidin;
    case 'elinarsaeti':
      return elinarsaeti;
    case 'gardar':
      return byggdasafn;
    case 'akrafjall':
      return akrafjall;
    case 'langisandur':
      return langisandur;
    case 'akratorg':
      return akratorg;
    default:
      console.log('id not found', id);
      return gudlaug;
  }
}

const markers = rawJson.Sheet1.map((marker) => {
  if (marker.lat) {
    const markerInfo = {
      id: marker.id,
      position: { lat: Number(marker.lat), lng: Number(marker.lng) },
      info: {
        title: marker.name,
        desc: marker.desc,
        cardImg: getImgById(marker.id),
      },
      img: marker.img,
    };
    if (marker.more) {
      markerInfo.info.more = marker.more;
    }
    return markerInfo;
  }
});

export default markers;
