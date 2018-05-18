import React from 'react';

import go from './go.svg';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

const Go = () => (
  <Box w={1 / 4} bg="teal" border="2px solid black" mx="-1px">
    <Box mt="1em">
      <BackgroundImage src={go} ratio={178.88 / 170.23} />
    </Box>
  </Box>
);

export default Go;
