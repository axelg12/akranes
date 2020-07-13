import React, { Suspense, useState } from 'react';
import Header from './Header';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Map from './Map';
import './App.css';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

const list = (changePathId: Function) => (
  <div>
    <List>
      <ListItem button onClick={() => changePathId('all')}>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <ListItemText primary="Engin sérstök leið" />
      </ListItem>
      <ListItem button onClick={() => changePathId('running')}>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Hlaupa leið" />
      </ListItem>
      <ListItem button onClick={() => changePathId('art')}>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <ListItemText primary="Listaganga" />
      </ListItem>
      <ListItem button onClick={() => changePathId('walking')}>
        <ListItemIcon>
          <DirectionsWalkIcon />
        </ListItemIcon>
        <ListItemText primary="Strandganga" />
      </ListItem>
    </List>
  </div>
);

function getPathName(pathId: string) {
  switch (pathId) {
    case 'running':
      return 'hlaupaleið';
    case 'art':
      return 'listaganga';
    case 'walking':
      return 'strandganga';
    default:
      break;
  }
}

function App() {
  const [isOpen, changeOnOpen] = useState(false);
  const [infoClick, onInfoClick] = useState(false);
  const [pathId, changePathId] = useState('all');
  console.log('pathId', pathId);
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <Map pathId={pathId} infoClick={infoClick} />
        {pathId !== 'all' && (
          <div className="App__pathInfo">
            <IconButton color="primary" onClick={() => onInfoClick(!infoClick)}>
              <InfoIcon /> {getPathName(pathId)}
            </IconButton>
          </div>
        )}
        <div className="App__icon" onClick={() => changeOnOpen(!isOpen)}>
          <IconButton color="primary">
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={() => changeOnOpen(false)}
          >
            {list(changePathId)}
          </Drawer>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
