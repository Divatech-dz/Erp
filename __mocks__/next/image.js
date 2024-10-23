import React from 'react';
import PropTypes from 'prop-types';

const NextImage = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

NextImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default NextImage;
