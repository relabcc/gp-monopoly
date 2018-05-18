import React from 'react';

import Flex from '../Flex';
import Block from '../Block';
import Go from '../Go';
import Zone from '../Zone';
import None from '../None';
import CenterMen from '../CenterMen';
import Chance from '../Chance';
import Destiny from '../Destiny';

import Box from '../Box';
import linkbox from '../../text/linkbox';

const modules = {
  Go,
  Block,
  Zone,
  None,
};

const Maze = ({src, ...props}) => (
  <Flex
    justify="center"
    bg="teal"
    flexWrap="wrap"
    position="relative"
    {...props}
  >
    {linkbox.map(({ module, ...link }) => {
      const Module = modules[module];
      return (
        <Module {...link} />
      );
    })}
    <CenterMen />
    <Chance />
    <Destiny />
  </Flex>
);

export default Maze;
