import React from 'react';
// import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import Text from '../Text';
import hero from './hero.svg';
import { siteTitle } from '../../text';
import mobileOrDesktop from '../ThemeProvider/mobileOrDesktop';

const Hero = (props) => (
  <Box align="center" mx={mobileOrDesktop('12.5%', '33%')} mt="4em">
    <BackgroundImage mt="1em" src={hero} ratio={253.81 / 489.11} />
    <Box
      border="2px solid black"
      borderRadius="50px"
      bg="teal"
      color="white"
      p="0.5em"
      mt="-1.75em"
      position="relative"
    >
      <Text.h1 f="2em" fontWeight={600}>
        {siteTitle}
      </Text.h1>
    </Box>
  </Box>
);

export default Hero;
