import markers from './markers';
import placeholder from '../images/placeholder.jpg';
import runningPath from './paths/runningPath';
import artWalk1, { artWalkOneMarkers } from './paths/artWalk1';
import artWalk2, { artWalkTwoMarkers } from './paths/artWalk2';
import artWalk3, { artWalkThreeMarkers } from './paths/artWalk3';
import artWalk4, { artWalkFourMarkers } from './paths/artWalk4';

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
  zIndex: 1,
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
      more: '',
    },
    img: '',
    paths: [],
  };
}

export function getPathInfo(pathId: string) {
  return getPathInfoById(pathId);
}

console.log(markers);

const allMarkers = markers
  .filter((marker) => marker.paths.filter((path) => path).length === 0)
  .map((marker) => marker.id);

function getMarkersByPath(pathId: string) {
  switch (pathId) {
    case 'running':
      return {
        markers: [],
        path: {
          color: '#005a9c',
          polylines: [runningPath],
        },
      };
    case 'art_one':
      return {
        markers: artWalkOneMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk1],
        },
      };
    case 'art_two':
      return {
        markers: artWalkTwoMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk2],
        },
      };

    case 'art_three':
      return {
        markers: artWalkThreeMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk3],
        },
      };
    case 'art_four':
      return {
        markers: artWalkFourMarkers,
        path: {
          color: '#005a9c',
          polylines: [artWalk4],
        },
      };
    default:
      return {
        markers: allMarkers,
        path: {
          color: 'white',
          polylines: [],
        },
      };
  }
}

export { options, getMarkersByPath };
