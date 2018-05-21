import React from 'react';

import MazeTable from '../MazeTable';
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
  <Box
    position="relative"
    {...props}
  >
    <MazeTable bg="teal">
      {linkbox.map((row, index) => (
        <tr key={index}>
          {row.map(({ module, ...link }) => {
            const Module = modules[module];
            return (
              <Module is="td" {...link} />
            );
          })}
        </tr>
      ))}
    </MazeTable>
    <CenterMen />
    <Chance />
    <Destiny />
  </Box>
);

export default Maze;
