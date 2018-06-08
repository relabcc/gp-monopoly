import React, { PureComponent } from 'react';
import windowSize from 'react-window-size';
import last from 'lodash/last';
import { timeout } from 'd3-timer';

import MazeTable from '../MazeTable';
import Block from '../Block';
import Go from '../Go';
import Zone from '../Zone';
import None from '../None';
import CenterMen from '../CenterMen';
import Chance from '../Chance';
import Destiny from '../Destiny';
import theme from '../ThemeProvider/theme';

import Box from '../Box';
import linkbox, { linkLength } from '../../text/linkbox';

const modules = {
  Go,
  Block,
  Zone,
  None,
};

const timeGap = 100;

class Maze extends PureComponent {
  state = {
    highlight: -1,
  }

  componentDidMount() {
    timeout(() => this.lightUp(0), 1000);
  }

  lightUp = (id) => {
    if (id === linkLength) return this.setState({ highlight: -1 });;
    this.setState({ highlight: id });
    timeout(() => this.lightUp(id + 1), timeGap);
  }

  render() {
    const { windowWidth, windowHeight, ...props } = this.props;
    const perRow = windowWidth >= last(theme.breakpoints) ? 8 : 4;
    return (
      <Box
        position="relative"
        {...props}
      >
        <MazeTable bg="teal" width="100%">
          <tbody>
            {linkbox(perRow).map((row, rowId) => (
              <tr key={rowId}>
                {row.map(({ module, id, ...link }, colId) => {
                  const Module = modules[module];
                  return (
                    <Module
                      is="td"
                      key={colId}
                      highlight={this.state.highlight === id}
                      {...link}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </MazeTable>
        <CenterMen />
        <Chance />
        <Destiny />
      </Box>
    );
  }
}

export default windowSize(Maze);
