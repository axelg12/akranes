import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Header from './Header';
import Map from './Map';
import './App.css';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

const list = (changePathId: Function, t: Function) => (
  <div>
    <List>
      <ListItem button onClick={() => changePathId('all')}>
        <ListItemIcon>
          <PhotoCameraIcon />
        </ListItemIcon>
        <ListItemText primary={t('all_title')} />
      </ListItem>
      <ListItem button onClick={() => changePathId('running')}>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText primary={t('running_title')} />
      </ListItem>
      <ListItem button onClick={() => changePathId('art')}>
        <ListItemIcon>
          <BrushIcon />
        </ListItemIcon>
        <ListItemText primary={t('art_title')} />
      </ListItem>
      <ListItem button onClick={() => changePathId('walking')}>
        <ListItemIcon>
          <DirectionsWalkIcon />
        </ListItemIcon>
        <ListItemText primary={t('walking_title')} />
      </ListItem>
    </List>
  </div>
);

function App() {
  const [isOpen, changeOnOpen] = useState(false);
  const [infoClick, onInfoClick] = useState(false);
  const [pathId, changePathId] = useState('all');
  const { t } = useTranslation();
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <Map pathId={pathId} infoClick={infoClick} />
        <div className="App__pathInfo">
          <IconButton color="primary" onClick={() => onInfoClick(!infoClick)}>
            <InfoIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className="App__icon" onClick={() => changeOnOpen(!isOpen)}>
          <IconButton color="primary">
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={() => changeOnOpen(false)}
          >
            {list(changePathId, t)}
          </Drawer>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
