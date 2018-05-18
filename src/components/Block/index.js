import React from 'react';
import PropTypes from 'prop-types';

import policysmall from './policy-small.svg';

import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';

import change from './change-small.svg';
import info from './info-small.svg';
import policy from './policy-small.svg';

const types = {
  change,
  info,
  policy,
};

const Block = ({ src, text, type, ...props }) => (
  <Box
    w={1 / 4}
    border="2px solid black"
    mx="-1px"
    bg="white"
    {...props}
  >
    <Box p="1px">
      <Box
        px="4em"
        borderBottom="2px solid"
        bg="teal"
      >
        <BackgroundImage src={types[type]} ratio={36.9 / 34.75} />
      </Box>
      <Box
        px="1.5em"
        py="1em"
        textAlign="center"
      >
        <Box px="2em" py="1em">
          <BackgroundImage src={src} ratio={36.9 / 34.75} />
        </Box>
        <Text>{text}</Text>
      </Box>
    </Box>
  </Box>
);

export default Block;
