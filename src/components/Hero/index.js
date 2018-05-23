import React from 'react';
// import PropTypes from 'prop-types';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import Text from '../Text';
import hero from './hero.svg';
import { siteTitle } from '../../text';

const Hero = (props) => (
  <Box align="center" mx="4em" mt="4em">
    <BackgroundImage mt="1em" src={hero} ratio={253.81 / 489.11} />
    <Box
      border="2px solid black"
      borderRadius="50px"
      bg="teal"
      color="white"
      p="0.5em"
      f="2em"
      mt="-1.2em"
      position="relative"
    >
      <Text.h1 f={['0.75em', '1em', '1em']} fontWeight={600}>
        {siteTitle}
      </Text.h1>
    </Box>
  </Box>
);

export default Hero;