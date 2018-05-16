import React from 'react';
import PropTypes from 'prop-types';

import policysmall from './policy-small.svg';
import go from './go.svg';

import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import linkbox from '../../text/linkbox';

const Maze = (props) => (
  <Flex
    justify="center"
    bg="teal"
    {...props}
  >
    <Box w={1} bg="teal" border="2px solid black" mx="-1px">
      <BackgroundImage src={go} ratio={178.88 / 170.23} />
    </Box>
    {linkbox.map((key, index) =>
      <Box
        w={1}
        border="2px solid black"
        mx="-1px"
        bg="white"
      >
        <Box p="1px">
          <Box
            px="4em"
            borderBottom="2px solid"
            bg="teal"
          >
            <BackgroundImage src={policysmall} ratio={36.9 / 34.75} />
          </Box>
          <Box
            px="1.5em"
            py="1em"
          >
            <Box px="2em" py="1em">
              <BackgroundImage src={key.src} ratio={36.9 / 34.75} />
            </Box>
            <Text>{key.text}</Text>
          </Box>
        </Box>
      </Box>
    )
  }
  </Flex>
);

export default Maze;
