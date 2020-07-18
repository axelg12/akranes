import placeholder from '../images/placeholder.jpg';
import runningPath from './paths/runningPath';
import artWalk1 from './paths/artWalk1';
import artWalk2 from './paths/artWalk2';
import artWalk3 from './paths/artWalk3';
import artWalk4 from './paths/artWalk4';

const options = {
  strokeColor: '#BAA390',
  strokeOpacity: 1,
  strokeWeight: 4,
  fillColor: '#BAA390',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

function getPathInfoById(pathID: string) {
  let title, desc, cardImg, position;
  switch (pathID) {
    default:
      title = 'listaganga';
      desc = 'listaganga';
      cardImg = placeholder;
      position = { lat: 64.3152673, lng: -22.0618914 };
      break;
  }
  return {
    id: pathID,
    position: position,
    info: {
      title: title,
      desc: desc,
      cardImg: cardImg,
      more: ''
    },
    img: ''
  };
}

export function getPathInfo(pathId: string) {
  return getPathInfoById(pathId);
}

const allMarkers = [
  'gudlaug',
  'breidin',
  'elinarsaeti',
  'gardar',
  'akrafjall',
  'langisandur',
  'akratorg',
  'fotboltamenn',
  'Sementsstrompur',
  'golf'
];

const artMarkers = ['gudlaug', 'gardar', 'akrafjall', 'langisandur', 'golf'];

function getMarkersByPath(pathId: string) {
  switch (pathId) {
    case 'running':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [runningPath]
        }
      };
    case 'art_one':
      return {
        markers: artMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk1]
        }
      };
    case 'art_two':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [artWalk2]
        }
      };

    case 'art_three':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [artWalk3]
        }
      };
    case 'art_four':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [artWalk4]
        }
      };
    default:
      return {
        markers: allMarkers,
        path: {
          color: 'white',
          polylines: []
        }
      };
  }
}

export { options, getMarkersByPath };
