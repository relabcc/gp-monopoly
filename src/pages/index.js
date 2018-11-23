import React from 'react';
import ReactGA from 'react-ga';

import Container from '../components/Container';
import ThemeProvider from '../components/ThemeProvider';

import Hero from '../components/Hero';
import Maze from '../components/Maze';
import Commentary from '../components/Commentary';

ReactGA.initialize('UA-36627671-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const Index = () => (
  <ThemeProvider>
    <Container pb="4em">
      <Hero />
      <Commentary />
      <Maze />
    </Container>
  </ThemeProvider>
);

export default Index;
