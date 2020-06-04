import React from 'react';
import ClipBoard from 'clipboard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { IMarker } from '../interfaces/interfaces';
import './Drawer.css';

export default function Drawer({ marker }: { marker: IMarker }) {
  new ClipBoard('.shareButton');
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
            {marker.info.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className="shareButton"
          data-clipboard-text={`#${marker.id}`}
          color="primary"
        >
          Share
        </Button>
        {marker.info.more && <Link href={marker.info.more}>Learn More</Link>}
      </CardActions>
    </Card>
  );
}
