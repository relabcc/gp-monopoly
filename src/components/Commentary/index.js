import React from 'react';

import Box from '../Box';
import Flex from '../Flex';
import Text from '../Text';
import Icontext from '../Icontext';

import legend from '../../text/legend';

const Commentary = (props) => (
  <Flex
      border="2px solid"
      borderRadius="0.25em"
      color="black"
      mx={['2.5em', null, null, null, '5em']}
      my="1.5em"
      px={['2em', null, '3em']}
      justify="center"
      align="center"
    >
      {legend.map((key, index) =>
        <Box w={1 / 3} align="center" py="1em" key={index}>
          <Icontext px={['30%', null, null, null, '40%']} src={key.src} />
          <Flex align="center" justify="center">
            <Box w="1em" mr="0.25em" border="1.5px solid">
              <Box bg={`types.${key.color}`} pt="100%" />
            </Box>
            <Box>{key.text}</Box>
          </Flex>
        </Box>
      )
    }
    </Flex>
);

export default Commentary;
