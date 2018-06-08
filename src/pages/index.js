import React from 'react';

import Container from '../components/Container';

import Hero from '../components/Hero';
import Maze from '../components/Maze';
import Commentary from '../components/Commentary';

const Index = () => (
  <Container pb="4em">
    <Hero />
    <Commentary />
    <Maze />
  </Container>
);

export default Index;
