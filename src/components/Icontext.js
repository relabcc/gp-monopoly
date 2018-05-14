import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import BackgroundImage from './BackgroundImage';

const Icontext = ({ src, text, ...props }) => (
  <Box {...props}>
    <BackgroundImage src={src} ratio={55.74 / 52.5} />
    <Box>{text}</Box>
  </Box>
);

export default Icontext;
