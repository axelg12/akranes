import markers from '../markers';
import running from './runningPath.json';

export const runningMarkers = markers
  .filter((marker) => marker.paths.includes('running'))
  .map((marker) => marker.id);

export default running;
