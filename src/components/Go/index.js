import React from 'react';

import go from './go.svg';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

const Go = (props) => (
  <Box w={1 / 4} bg="teal" border="2px solid black" {...props}>
    <Box>
      <BackgroundImage src={go} ratio={178.88 / 170.23} />
    </Box>
  </Box>
);

export default Go;
