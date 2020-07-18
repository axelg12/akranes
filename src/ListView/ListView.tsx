import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import markers from '../Map/markers';
import { getMarkersByPath, getPathInfo } from '../Map/paths';
import './ListView.css';
import { IPosition } from '../interfaces/interfaces';

function ListView({ googleMap, pathId }: { googleMap: any; pathId: string }) {
  const panToPos = (pos: IPosition) => {
    if (googleMap) {
      googleMap.panTo(pos);
    }
  };

  const renderListCard = (marker: any, index?: number | string) => {
    return (
      <div key={index}>
        <Card className="ListView__drawer">
          <CardActionArea
            onClick={() => {
              panToPos(marker.position);
            }}
          >
            <CardMedia
              className="Drawer__image"
              image={marker.info.cardImg}
              title={marker.info.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {t(`${marker.id}_title`)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {t(`${marker.id}_desc`)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {marker.info.more && (
              <Link target="_blank" href={marker.info.more}></Link>
            )}
          </CardActions>
        </Card>
      </div>
    );
  };

  const markerIds = getMarkersByPath(pathId);
  const { t } = useTranslation();
  return (
    <div className="ListView">
      {renderListCard(getPathInfo(pathId), 'pathMarker')}
      {markers.map((marker, index) => {
        console.log('markerid', marker.id);
        if (!marker || !markerIds.markers.includes(marker.id)) return null;
        return renderListCard(marker, index);
      })}
    </div>
  );
}

export default ListView;
