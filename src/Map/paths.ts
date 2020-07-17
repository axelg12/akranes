import placeholder from '../images/placeholder.jpg';

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
  };
}

export function getPathInfo(pathId: string) {
  return getPathInfoById(pathId);
}

const artPath = [
  { lat: 64.3082191, lng: -22.09488 },
  { lat: 64.3083773, lng: -22.0945796 },
  { lat: 64.3085587, lng: -22.0944401 },
  { lat: 64.3087354, lng: -22.094601 },
  { lat: 64.3089029, lng: -22.0944187 },
  { lat: 64.3089, lng: -22.09439 },
  { lat: 64.30897, lng: -22.09428 },
  { lat: 64.3092, lng: -22.094 },
  { lat: 64.30936, lng: -22.09381 },
  { lat: 64.30962, lng: -22.09356 },
  { lat: 64.30962, lng: -22.09356 },
  { lat: 64.3097, lng: -22.09348 },
  { lat: 64.31001, lng: -22.0932 },
  { lat: 64.31025, lng: -22.09293 },
  { lat: 64.31046, lng: -22.09269 },
  { lat: 64.31046, lng: -22.09269 },
  { lat: 64.31085, lng: -22.09227 },
  { lat: 64.31093, lng: -22.09222 },
  { lat: 64.3109295, lng: -22.0922307 },
  { lat: 64.3113295, lng: -22.091469 },
  { lat: 64.3121015, lng: -22.0905785 },
  { lat: 64.312455, lng: -22.0902781 },
  { lat: 64.31245, lng: -22.09027 },
  { lat: 64.31255, lng: -22.0902 },
  { lat: 64.31255, lng: -22.0902 },
  { lat: 64.31259, lng: -22.09006 },
  { lat: 64.31283, lng: -22.08976 },
  { lat: 64.3129, lng: -22.08969 },
  { lat: 64.31295, lng: -22.08965 },
  { lat: 64.31295, lng: -22.08965 },
  { lat: 64.31358, lng: -22.09101 },
  { lat: 64.3142869, lng: -22.0903241 },
  { lat: 64.31429, lng: -22.09032 },
  { lat: 64.3143, lng: -22.09038 },
  { lat: 64.3143, lng: -22.09038 },
  { lat: 64.3143, lng: -22.09038 },
  { lat: 64.3143, lng: -22.09038 },
  { lat: 64.3143, lng: -22.09038 },
  { lat: 64.31431, lng: -22.09041 },
  { lat: 64.31482, lng: -22.09212 },
  { lat: 64.31482, lng: -22.09212 },
  { lat: 64.31484, lng: -22.09208 },
  { lat: 64.31503, lng: -22.0918 },
  { lat: 64.3156, lng: -22.09092 },
  { lat: 64.31607, lng: -22.09027 },
  { lat: 64.31621, lng: -22.09006 },
  { lat: 64.31664, lng: -22.08941 },
  { lat: 64.31682, lng: -22.08909 },
  { lat: 64.31682, lng: -22.08909 },
  { lat: 64.31674, lng: -22.08873 },
  { lat: 64.31673, lng: -22.08857 },
  { lat: 64.31673, lng: -22.08857 },
  { lat: 64.31672, lng: -22.08854 },
  { lat: 64.31673, lng: -22.08834 },
  { lat: 64.31675, lng: -22.0881 },
  { lat: 64.31678, lng: -22.08796 },
  { lat: 64.31681, lng: -22.08772 },
  { lat: 64.31687, lng: -22.08723 },
  { lat: 64.31687, lng: -22.08723 },
  { lat: 64.31701, lng: -22.08583 },
  { lat: 64.31718, lng: -22.08425 },
  { lat: 64.3171846, lng: -22.0841534 },
  { lat: 64.3171149, lng: -22.0840569 },
  { lat: 64.3170219, lng: -22.0839496 },
  { lat: 64.3169336, lng: -22.0838852 },
  { lat: 64.3169801, lng: -22.083499 },
  { lat: 64.3170219, lng: -22.0832844 },
  { lat: 64.3170312, lng: -22.0831986 },
  { lat: 64.3169847, lng: -22.0830376 },
  { lat: 64.3169336, lng: -22.0829518 },
  { lat: 64.31693, lng: -22.08297 },
  { lat: 64.31687, lng: -22.08289 },
  { lat: 64.31683, lng: -22.08283 },
  { lat: 64.3168, lng: -22.08278 },
  { lat: 64.31677, lng: -22.08268 },
  { lat: 64.31675, lng: -22.08259 },
  { lat: 64.31674, lng: -22.08251 },
  { lat: 64.31673, lng: -22.08242 },
  { lat: 64.31673, lng: -22.08241 },
  { lat: 64.31673, lng: -22.08241 },
  { lat: 64.31672, lng: -22.08229 },
  { lat: 64.31671, lng: -22.08213 },
  { lat: 64.31671, lng: -22.08194 },
  { lat: 64.31671, lng: -22.08172 },
  { lat: 64.31672, lng: -22.0815 },
  { lat: 64.31674, lng: -22.08131 },
  { lat: 64.3168, lng: -22.08099 },
  { lat: 64.31683, lng: -22.08084 },
  { lat: 64.31683, lng: -22.08084 },
  { lat: 64.31687, lng: -22.08062 },
  { lat: 64.31694, lng: -22.08037 },
  { lat: 64.31705, lng: -22.08007 },
  { lat: 64.3171, lng: -22.07995 },
  { lat: 64.31716, lng: -22.07985 },
  { lat: 64.31722, lng: -22.07977 },
  { lat: 64.31729, lng: -22.0797 },
  { lat: 64.31734, lng: -22.07968 },
  { lat: 64.31734, lng: -22.07967 },
  { lat: 64.31737, lng: -22.07966 },
  { lat: 64.31745, lng: -22.07963 },
  { lat: 64.31754, lng: -22.07964 },
  { lat: 64.31762, lng: -22.07969 },
  { lat: 64.31768, lng: -22.07976 },
  { lat: 64.31772, lng: -22.07982 },
  { lat: 64.31772, lng: -22.07982 },
  { lat: 64.31749, lng: -22.08083 },
  { lat: 64.31748, lng: -22.08086 },
  { lat: 64.31739, lng: -22.08128 },
  { lat: 64.3175713, lng: -22.0817199 },
  { lat: 64.3177294, lng: -22.0816448 },
  { lat: 64.3178061, lng: -22.0816233 },
  { lat: 64.3178526, lng: -22.0817199 },
  { lat: 64.3179084, lng: -22.0819398 },
  { lat: 64.3179689, lng: -22.0821329 },
  { lat: 64.3180689, lng: -22.0819774 },
  { lat: 64.31807, lng: -22.08198 },
  { lat: 64.3184, lng: -22.0831 },
  { lat: 64.31875, lng: -22.08443 },
  { lat: 64.31879, lng: -22.08465 },
  { lat: 64.31879, lng: -22.08465 },
  { lat: 64.31879, lng: -22.08464 },
  { lat: 64.31893, lng: -22.08444 },
  { lat: 64.31894, lng: -22.08442 },
  { lat: 64.3193, lng: -22.08385 },
  { lat: 64.319579, lng: -22.0834745 },
  { lat: 64.31958, lng: -22.08347 },
  { lat: 64.3195, lng: -22.08297 },
  { lat: 64.31945, lng: -22.08272 },
  { lat: 64.31928, lng: -22.08177 },
  { lat: 64.31927, lng: -22.0817 },
  { lat: 64.31923, lng: -22.08146 },
  { lat: 64.31905, lng: -22.08024 },
  { lat: 64.3190454, lng: -22.0801756 },
  { lat: 64.3191802, lng: -22.080004 },
  { lat: 64.3193104, lng: -22.0797787 },
  { lat: 64.3194452, lng: -22.0795748 },
  { lat: 64.3195242, lng: -22.079725 },
];

const paths = [
  { lat: 64.318466, lng: -22.068622 },
  { lat: 64.31815, lng: -22.065961 },
  { lat: 64.317592, lng: -22.062571 },
  { lat: 64.316932, lng: -22.059245 },
  { lat: 64.316304, lng: -22.056541 },
  { lat: 64.315309, lng: -22.053623 },
  { lat: 64.314501, lng: -22.052093 },
  { lat: 64.31432, lng: -22.052533 },
  { lat: 64.313553, lng: -22.052533 },
  { lat: 64.312958, lng: -22.05234 },
  { lat: 64.31293, lng: -22.052243 },
  { lat: 64.313125, lng: -22.05088 },
  { lat: 64.31346, lng: -22.050129 },
  { lat: 64.313539, lng: -22.048745 },
  { lat: 64.313539, lng: -22.047973 },
  { lat: 64.31359, lng: -22.046653 },
  { lat: 64.313455, lng: -22.045237 },
  { lat: 64.313306, lng: -22.044593 },
  { lat: 64.312962, lng: -22.043499 },
  { lat: 64.312525, lng: -22.042233 },
];

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
  'golf',
];

const artMarkers = ['gudlaug', 'gardar', 'akrafjall', 'langisandur', 'golf'];

const runningMarkers = [
  'jadarsbakki',
  'gudlaug',
  'gardar',
  'akrafjall',
  'langisandur',
  'golf',
];

function getMarkersByPath(pathId: string) {
  switch (pathId) {
    case 'running':
      return {
        markers: runningMarkers,
        path: {
          color: '#B4D283',
          polylines: [],
        },
      };
    case 'art_one':
      return {
        markers: artMarkers,
        path: {
          color: '#005a9c',
          polylines: [artPath],
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

export { paths, options, getMarkersByPath };
