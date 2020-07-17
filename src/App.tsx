import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Header from './Header';
import Map from './Map';
import './App.css';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  const [isOpen, changeOnOpen] = useState(false);
  const [infoClick, onInfoClick] = useState(false);
  const [subSelection, setSubSelection] = useState<string | undefined>();
  const [pathId, changePathId] = useState('all');
  const { t } = useTranslation();

  const list = () => {
    if (subSelection === 'art') {
      return (
        <div>
          <List>
            <ListItem button onClick={() => setSelectedPath('art_one')}>
              <ListItemIcon>
                <BrushIcon />
              </ListItemIcon>
              <ListItemText primary="Listaganga 1" />
            </ListItem>
          </List>
          <List>
            <ListItem button onClick={() => setSelectedPath('art_one')}>
              <ListItemIcon>
                <BrushIcon />
              </ListItemIcon>
              <ListItemText primary="Listaganga 2" />
            </ListItem>
          </List>
        </div>
      );
    }
    return (
      <div>
        <List>
          <ListItem button onClick={() => setSelectedPath('all')}>
            <ListItemIcon>
              <PhotoCameraIcon />
            </ListItemIcon>
            <ListItemText primary={t('all_title')} />
          </ListItem>
          <ListItem button onClick={() => setSubSelection('art')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary={t('art_title')} />
          </ListItem>
          <ListItem button onClick={() => changePathId('running')}>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary={t('running_title')} />
          </ListItem>
        </List>
      </div>
    );
  };

  const setSelectedPath = (selectedPathId: string) => {
    changePathId(selectedPathId);
    changeOnOpen(false);
    setTimeout(() => {
      setSubSelection(undefined);
    }, 2500);
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Header />
        <Map pathId={pathId} infoClick={infoClick} />
        <div className="App__pathInfo">
          <IconButton color="inherit" onClick={() => onInfoClick(!infoClick)}>
            <InfoIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div
          className="App__icon"
          onClick={() => {
            if (!isOpen) {
              changeOnOpen(true);
            }
          }}
        >
          <IconButton color="inherit">
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={() => changeOnOpen(false)}
          >
            {list()}
          </Drawer>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
