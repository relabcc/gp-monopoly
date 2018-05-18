import React from 'react';

import Flex from '../Flex';
import Block from '../Block';
import Go from '../Go';

import linkbox from '../../text/linkbox';

const modules = {
  Go,
  Block,
};

const Maze = (props) => (
  <Flex
    justify="center"
    bg="teal"
    flexWrap="wrap"
    {...props}
  >
    {linkbox[0].map(({ module, ...link }) => {
      const Module = modules[module];
      return (
        <Module {...link} />
      );
    })}
  </Flex>
);

export default Maze;
