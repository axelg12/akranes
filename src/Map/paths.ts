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
const runningPath = [
  { lat: 64.325903, lng: -21.985586 },
  { lat: 64.326105, lng: -21.985184 },
  { lat: 64.327151, lng: -21.984422 },
  { lat: 64.327929, lng: -21.983554 },
  { lat: 64.328096, lng: -21.988082 },
  { lat: 64.327747, lng: -21.987513 },
  { lat: 64.327477, lng: -21.987352 },
  { lat: 64.327272, lng: -21.987481 },
  { lat: 64.326905, lng: -21.988189 },
  { lat: 64.326552, lng: -21.989176 },
  { lat: 64.325655, lng: -21.989959 },
  { lat: 64.325251, lng: -21.990356 },
  { lat: 64.324721, lng: -21.990088 },
  { lat: 64.323749, lng: -21.99086 },
  { lat: 64.322536, lng: -21.993671 },
  { lat: 64.322454, lng: -21.993953 },
  { lat: 64.3225, lng: -21.99464 },
  { lat: 64.321541, lng: -21.999476 },
  { lat: 64.320397, lng: -22.003886 },
  { lat: 64.320364, lng: -22.00483 },
  { lat: 64.320229, lng: -22.005184 },
  { lat: 64.320099, lng: -22.005688 },
  { lat: 64.319274, lng: -22.007478 },
  { lat: 64.318916, lng: -22.007972 },
  { lat: 64.318572, lng: -22.008154 },
  { lat: 64.31826, lng: -22.008562 },
  { lat: 64.317832, lng: -22.009356 },
  { lat: 64.316928, lng: -22.012544 },
  { lat: 64.315793, lng: -22.014271 },
  { lat: 64.313648, lng: -22.017934 },
  { lat: 64.310957, lng: -22.023606 },
  { lat: 64.30952, lng: -22.026986 },
  { lat: 64.308194, lng: -22.028778 },
  { lat: 64.307613, lng: -22.029723 },
];

// const walkingPathOne = [
//   { lat: 64.312539, lng: -22.04189 },
//   { lat: 64.312539, lng: -22.04189 },
//   { lat: 64.314528, lng: -22.037599 },
//   { lat: 64.319121, lng: -22.049384 },
//   { lat: 64.320402, lng: -22.052702 },
//   { lat: 64.320977, lng: -22.054431 },
//   { lat: 64.321228, lng: -22.056054 },
//   { lat: 64.321241, lng: -22.057652 },
//   { lat: 64.321095, lng: -22.059759 },
//   { lat: 64.321944, lng: -22.061134 },
//   { lat: 64.32265, lng: -22.062979 },
//   { lat: 64.324453, lng: -22.069288 },
//   { lat: 64.32594, lng: -22.075425 },
//   { lat: 64.321777, lng: -22.081761 },
//   { lat: 64.316625, lng: -22.089529 },
//   { lat: 64.314362, lng: -22.092741 },
//   { lat: 64.313585, lng: -22.091016 },
//   { lat: 64.313728, lng: -22.090425 },
//   { lat: 64.313771, lng: -22.089879 },
//   { lat: 64.313725, lng: -22.087469 },
//   { lat: 64.31527, lng: -22.085639 },
//   { lat: 64.31513, lng: -22.084749 },
//   { lat: 64.315229, lng: -22.08408 },
//   { lat: 64.315697, lng: -22.082467 },
//   { lat: 64.315743, lng: -22.081969 },
//   { lat: 64.315782, lng: -22.081573 },
//   { lat: 64.3172, lng: -22.076966 },
//   { lat: 64.317633, lng: -22.075034 },
//   { lat: 64.318175, lng: -22.069823 },
//   { lat: 64.318496, lng: -22.068784 },
//   { lat: 64.318322, lng: -22.067675 },
//   { lat: 64.317902, lng: -22.06418 },
//   { lat: 64.316972, lng: -22.059545 },
//   { lat: 64.316448, lng: -22.057109 },
//   { lat: 64.31452, lng: -22.052023 },
//   { lat: 64.315501, lng: -22.04977 },
//   { lat: 64.315253, lng: -22.048888 },
//   { lat: 64.315407, lng: -22.04857 },
//   { lat: 64.312933, lng: -22.042304 },
//   { lat: 64.312561, lng: -22.041941 },
//   { lat: 64.312539, lng: -22.04189 },
// ];

const walkingPaths = [
  { lat: 64.332818, lng: -22.053484 },
  { lat: 64.332558, lng: -22.053849 },
  { lat: 64.33233, lng: -22.054493 },
  { lat: 64.332214, lng: -22.054879 },
  { lat: 64.332051, lng: -22.055265 },
  { lat: 64.332107, lng: -22.055962 },
  { lat: 64.33226, lng: -22.056681 },
  { lat: 64.332423, lng: -22.0574 },
  { lat: 64.332483, lng: -22.058097 },
  { lat: 64.332418, lng: -22.058794 },
  { lat: 64.332214, lng: -22.059309 },
  { lat: 64.331991, lng: -22.059974 },
  { lat: 64.331015, lng: -22.062023 },
  { lat: 64.330638, lng: -22.063395 },
  { lat: 64.330387, lng: -22.063813 },
  { lat: 64.330238, lng: -22.063877 },
  { lat: 64.330061, lng: -22.063684 },
  { lat: 64.329745, lng: -22.063845 },
  { lat: 64.329573, lng: -22.063942 },
  { lat: 64.32928, lng: -22.063277 },
  { lat: 64.328606, lng: -22.064178 },
  { lat: 64.328063, lng: -22.065099 },
  { lat: 64.327236, lng: -22.065947 },
  { lat: 64.32659, lng: -22.067606 },
  { lat: 64.326218, lng: -22.069666 },
  { lat: 64.326223, lng: -22.071372 },
  { lat: 64.326405, lng: -22.073107 },
  { lat: 64.326521, lng: -22.074405 },
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
  'bjarnarlaug',
  'jadarsbakki',
  'Sementsstrompur',
  'golf',
];

const walkingMarkers = [
  'Sementsstrompur',
  'langisandur',
  'elinarsaeti',
  'gudlaug',
];

const artMarkers = [
  'jadarsbakki',
  'gudlaug',
  'gardar',
  'akrafjall',
  'langisandur',
  'golf',
];

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
          polylines: [runningPath],
        },
      };
    case 'walking':
      return {
        markers: walkingMarkers,
        path: {
          color: '#F36E19',
          polylines: [walkingPaths, paths],
        },
      };
    case 'art':
      return {
        markers: artMarkers,
        path: {
          color: 'white',
          polylines: [],
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

export { paths, options, getMarkersByPath, walkingPaths };
