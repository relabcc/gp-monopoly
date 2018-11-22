import React from 'react';
import centerMan from './center-man.svg';

import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import mobileOrDesktop from '../ThemeProvider/mobileOrDesktop';

const CenterMan = () => (
  <Box
    position="absolute"
    w={mobileOrDesktop('48%', '20%')}
    top={mobileOrDesktop('50%', '52%')}
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
