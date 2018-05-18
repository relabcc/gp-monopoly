import React from 'react';
import PropTypes from 'prop-types';
import exclamation from '../Zone/exclamation.svg';

import Box from '../Box';
import Flex from '../Flex';
import BackgroundImage from '../BackgroundImage';

const Chance = () => (
  <Box
    position="absolute"
    w="30%"
    bottom="20%"
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
      pb="10%"
    >
      <Box f={["1.5em", "2.5em", "2.5em"]}>命</Box>
      <Box w={1/3}>
        <BackgroundImage
          src={exclamation}
          ratio={112 / 72.69}
        />
      </Box>
      <Box f={["1.5em", "2.5em", "2.5em"]}>運</Box>
    </Flex>
    <Box pt="40%" f={["1.2em", null, "1.5em"]}>臺灣的現況</Box>
  </Box>
);

export default Chance;
