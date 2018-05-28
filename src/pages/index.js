import React from 'react';

import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import Hero from '../components/Hero';
import Maze from '../components/Maze';
import Icontext from '../components/Icontext';
import Flex from '../components/Flex';
import mobileOrDesktop from '../components/ThemeProvider/mobileOrDesktop';

import legend from '../text/legend';

const Index = () => (
  <Container pb="4em">
    <Hero />
    <Flex
      border="2px solid"
      borderRadius="0.25em"
      color="black"
      mx={mobileOrDesktop('5%', '30%')}
      my="1.5em"
      px={['2em', null, '3em']}
      justify="center"
      align="center"
    >
      {legend.map((key, index) =>
        <Box w={1 / 3} align="center" py="1em" key={index}>
          <Icontext px={mobileOrDesktop('30%', '40%')} src={key.src} />
          <Text>{key.text}</Text>
        </Box>
      )
    }
    </Flex>
    <Maze />
  </Container>
);

export default Index;
