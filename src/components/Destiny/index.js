import React from 'react';
import { destiny, destinySub } from '../../text';
import exclamation from '../Zone/exclamation.svg';

import Box from '../Box';
import Flex from '../Flex';
import BackgroundImage from '../BackgroundImage';
import BigLetter from '../BigLetter';

const Destiny = () => (
  <Box
    position="absolute"
    w={['30%', null, null, null, '20%']}
    bottom={['16%', null, null, null, '50%']}
    left={['50%', null, null, null, 'auto']}
    right={[null, null, null, null, '15%']}
    transform={['translateX(-50%)', null, null, null, 'translateY(50%)']}
    bg="white"
    border="2px solid"
    borderRadius="8px"
    align="center"
    px="3%"
    py={['7%', null, null, null, '3%']}
  >
      <Flex
        justify="space-around"
        align="flex-end"
        px="5%"
      >
        <Box><BigLetter>{destiny[0]}</BigLetter></Box>
        <Box w={1 / 3}>
          <BackgroundImage
            src={exclamation}
            ratio={112 / 72.69}
          />
        </Box>
        <Box><BigLetter>{destiny[1]}</BigLetter></Box>
      </Flex>
      <Box pt="40%" f={["1.2em", null, "1.5em"]}>{destinySub}</Box>
  </Box>
);

export default Destiny;
