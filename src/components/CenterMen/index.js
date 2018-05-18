import React from 'react';
import PropTypes from 'prop-types';
import centerMan from './center-man.svg';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

const CenterMan = () => (
  <Box
    position="absolute"
    w="48%"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
  >
    <BackgroundImage
      src={centerMan}
      ratio={314.66 / 305.33}
    />
  </Box>
);

export default CenterMan;
