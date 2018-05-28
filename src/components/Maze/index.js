import React from 'react';
import windowSize from 'react-window-size';

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

const Maze = ({ windowWidth, ...props }) => (
  <Box
    position="relative"
    {...props}
  >
    <MazeTable bg="teal" width="100%">
      {linkbox(windowWidth >= 1680 ? 8 : 4).map((row, index) => (
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

export default windowSize(Maze);
