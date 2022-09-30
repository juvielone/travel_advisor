import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  console.log({ selected });
  console.log({ refProp });

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://hannaone.com/wp-content/uploads/2020/07/5-Unknown-Facts-about-Korean-Food.jpg"
        }
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        {/* Rating */}
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />

          <Typography gutterBottom variant="subtitle1">
            out of{place.num_reviews} reviews
          </Typography>
        </Box>

        {/* Price Content */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>

          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        {/* Ranking */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>

          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {/* Awards */}
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {/* Type cuisine in badges */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {/* Address of the Restaurants */}

        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle2}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {/* Phone Number */}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        {/* Action Buttons to redirect  */}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "blank")}
          >
            Trip Advisor
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
