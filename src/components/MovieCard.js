import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Rating: {rating}/10</span>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterURL: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
