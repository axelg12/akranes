import React from 'react';
import { useTranslation } from 'react-i18next';
import ClipBoard from 'clipboard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { IMarker } from '../interfaces/interfaces';
import './Drawer.css';

export default function Drawer({ marker }: { marker: IMarker }) {
  const { t } = useTranslation();

  new ClipBoard('.MuiButton-label');
  return (
    <Card className="Drawer">
      <CardActionArea>
        <CardMedia
          className="Drawer__image"
          image={marker.info.cardImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {marker.info.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {t(`${marker.id}_desc`)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {marker.info.more && (
          <Link target="_blank" href={marker.info.more}>
            {t('learn_more')}
          </Link>
        )}
      </CardActions>
    </Card>
  );
}
