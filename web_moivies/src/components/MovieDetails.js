import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';

const MovieDetails = ({ movie }) => {
  return (
    <Container maxWidth="md">
      <Card sx={{ display: 'flex', mt: 5 }}>
        <CardMedia
          component="img"
          sx={{ width: 250 }}
          image={movie.poster}
          title={movie.title}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {movie.synopsis}
          </Typography>
          <Typography variant="h6" component="h3" mt={3}>
            Cast
          </Typography>
          <Grid container spacing={2}>
            {movie.cast.map((actor) => (
              <Grid item xs={6} key={actor}>
                <Typography variant="body2">{actor}</Typography>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" component="h3" mt={3}>
            Reviews
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {movie.reviews.join(', ')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetails;