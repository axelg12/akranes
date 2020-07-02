import React, { Suspense, useState } from 'react';
import Header from './Header';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
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
        <ListItemText primary="No specific path" />
      </ListItem>
      <ListItem button onClick={() => changePathId('running')}>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary="Running path" />
      </ListItem>
      <ListItem button onClick={() => changePathId('art')}>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <ListItemText primary="Art path" />
      </ListItem>
      <ListItem button onClick={() => changePathId('walking')}>
        <ListItemIcon>
          <DirectionsWalkIcon />
        </ListItemIcon>
        <ListItemText primary="Walking path" />
      </ListItem>
    </List>
  </div>
);

function App() {
  const [isOpen, changeOnOpen] = useState(false);
  const [pathId, changePathId] = useState('All');
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <Map pathId={pathId} />
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
