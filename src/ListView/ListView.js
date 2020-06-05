import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import markers from '../Map/markers';
import './ListView.css';

function ListView({ googleMap }) {
  const panToPos = (pos) => {
    if (googleMap) {
      googleMap.panTo(pos);
    }
  };

  return (
    <div className="ListView">
      {markers.map((marker, index) => {
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
                    {marker.info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {marker.info.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {marker.info.more && (
                  <Link target="_blank" href={marker.info.more}>
                    Learn More
                  </Link>
                )}
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;
