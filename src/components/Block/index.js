import React from 'react';
import PropTypes from 'prop-types';

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
    bg="white"
    {...props}
  >
    <Box p="1px">
      <Box
        px="40%"
        borderBottom="2px solid"
        bg="teal"
      >
        <BackgroundImage src={types[type]} ratio={36.9 / 34.75} />
      </Box>
      <Box
        px="12%"
        py="1em"
        textAlign="center"
      >
        <Box px="10%" py="1em">
          <BackgroundImage src={src} ratio={56 / 91.31} />
        </Box>
        <Text whiteSpace="pre-wrap">{text}</Text>
      </Box>
    </Box>
  </Box>
);

export default Block;
