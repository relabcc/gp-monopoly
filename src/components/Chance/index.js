import React from 'react';
import { chance, chanceSub } from '../../text';
import question from '../Zone/question.svg';

import Box from '../Box';
import Flex from '../Flex';
import BackgroundImage from '../BackgroundImage';
import BigLetter from '../BigLetter';

const Chance = () => (
  <Box
    position="absolute"
    w="30%"
    top="16%"
    left="50%"
    transform="translateX(-50%)"
    bg="white"
    border="2px solid"
    borderRadius="8px"
    align="center"
    px="3%"
    py="7%"
  >
    <Flex
      justify="space-around"
      align="flex-end"
      px="5%"
    >
      <Box>
        <BigLetter>
          {chance[0]}
        </BigLetter>
      </Box>
      <Box w={1/3}>
        <BackgroundImage
          src={question}
          ratio={112 / 72.69}
        />
      </Box>
      <Box>
        <BigLetter>
          {chance[1]}
        </BigLetter>
      </Box>
    </Flex>
    <Box pt="40%" f={["1.2em", null, "1.5em"]}>{chanceSub}</Box>
  </Box>
);

export default Chance;
