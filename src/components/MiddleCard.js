import React from 'react';

import Box from './Box';
import Flex from './Flex';
import BackgroundImage from './BackgroundImage';
import BigLetter from './BigLetter';
import mobileOrDesktop from './ThemeProvider/mobileOrDesktop';

const MiddleCard = ({ text, sub, src, ...props }) => (
  <Box
    position="absolute"
    w={mobileOrDesktop('27.5%', '15%')}
    bg="white"
    border="2px solid"
    borderRadius="8px"
    align="center"
    px={mobileOrDesktop('3%', '1%')}
    py={mobileOrDesktop('7%', '3%')}
    {...props}
  >
      <Flex
        justify="space-around"
        align="flex-end"
        px="5%"
      >
        <Box><BigLetter>{text[0]}</BigLetter></Box>
        <Box w={1 / 3}>
          <BackgroundImage
            src={src}
            ratio={112 / 72.69}
          />
        </Box>
        <Box><BigLetter>{text[1]}</BigLetter></Box>
      </Flex>
      <Box pt="40%" f={mobileOrDesktop('1.2em', '1.5em')}>{sub}</Box>
  </Box>
);

export default MiddleCard;
