import React from 'react';
import Link from 'gatsby-link';

import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import Hero from '../components/Hero';
import Maze from '../components/Maze';
import Button from '../components/Button';
import Icontext from '../components/Icontext';
import Flex from '../components/Flex';

import legend from '../text/legend';

const Index = () => (
  <Container>
    <Hero />
    <Flex
      border="2px solid"
      borderRadius="8px"
      fontWeight="700"
      color="black"
      mx="2.5em"
      my="1.5em"
      px="3em"
      justify="center"
      align="center"
    >
      {legend.map((key, index) =>
        <Box w={1/3} align="center" py="1em">
          <Icontext px="3.5em" src={key.src} />
          <Text>{key.text}</Text>
        </Box>
      )
    }
    </Flex>
    <Maze />
  </Container>
);

export default Index;
