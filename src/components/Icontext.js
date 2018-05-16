import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import BackgroundImage from './BackgroundImage';

const Icontext = ({ src, ...props }) => (
  <Box {...props}>
    <BackgroundImage src={src} ratio={55.74 / 52.5} />
  </Box>
);

export default Icontext;
