import React from 'react';
import Link from 'gatsby-link';

import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import BackgroundImage from '../components/BackgroundImage';
import Button from '../components/Button';
import Icontext from '../components/Icontext';

import hero from '../images/hero.svg';
import legend from '../text/legend';

const Index = () => (
  <Container>
    <Box align="center" mx="3em">
      <BackgroundImage mt="1em" src={hero} ratio={253.81 / 489.11} />
      <Box
        border="2px solid black"
        borderRadius="50px"
        fontWeight="700"
        bg="teal"
        color="white"
        p="0.5em"
        f="2em"
        mt="-0.9em"
        position="relative"
      >
        一網打盡 能源大地圖
      </Box>
    </Box>
    <Box
      border="2px solid"
      borderRadius="8px"
      fontWeight="700"
      color="black"
      p="0.5em"
      my="1em"
    >
    </Box>
  </Container>
);

export default Index;
