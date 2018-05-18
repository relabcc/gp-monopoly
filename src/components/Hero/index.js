import React from 'react';
// import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import hero from './hero.svg';

const Hero = (props) => (
  <Box align="center" mx="4em" mt="4em">
    <BackgroundImage mt="1em" src={hero} ratio={253.81 / 489.11} />
    <Box
      border="2px solid black"
      borderRadius="50px"
      fontWeight="700"
      bg="teal"
      color="white"
      p="0.5em"
      f="2em"
      mt="-1.2em"
      position="relative"
    >
      一網打盡 能源大地圖
    </Box>
  </Box>
);

export default Hero;
