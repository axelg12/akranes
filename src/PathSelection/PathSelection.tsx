import React from 'react';
import List from '@material-ui/core/List';
import BrushIcon from '@material-ui/icons/Brush';
import ListItem from '@material-ui/core/ListItem';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

interface IPathSelection {
  subSelection?: string;
  setSelectedPath: Function;
  setSubSelection: Function;
  t: Function;
}

function PathSelection({
  subSelection,
  setSelectedPath,
  t,
  setSubSelection,
}: IPathSelection) {
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
          <ListItem button onClick={() => setSelectedPath('art_two')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary="Listaganga 2" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('art_three')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary="Listaganga 3" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('art_four')}>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary="Listaganga 4" />
          </ListItem>
        </List>
      </div>
    );
  }
  if (subSelection === 'beach') {
    return (
      <div>
        <List>
          <ListItem button onClick={() => setSelectedPath('beach_one')}>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary="Strandganga 1" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('beach_two')}>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary="Strandganga 2" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPath('beach_three')}>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary="Strandganga 3" />
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
        <ListItem button onClick={() => setSelectedPath('running')}>
          <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText primary={t('running_title')} />
        </ListItem>
        <ListItem button onClick={() => setSubSelection('beach')}>
          <ListItemIcon>
            <BeachAccessIcon />
          </ListItemIcon>
          <ListItemText primary={t('beach_title')} />
        </ListItem>
      </List>
    </div>
  );
}

export default PathSelection;
