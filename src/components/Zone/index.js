import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Text from '../Text';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import question from './question.svg';
import exclamation from './exclamation.svg';

const types = {
  question,
  exclamation,
};

const Zone = ({ src, text, type, right, ...props }) => (
  <Box
    w={1 / 4}
    border="2px solid black"
    bg="gray"
    position="relative"
    {...props}
  >
    <Box p="1px">
      <Box
        px="12%"
        py="1em"
        textAlign="center"
      >
        <Box px="25%" py="1em">
          <BackgroundImage src={types[type]} ratio={112 / 72.69} />
        </Box>
        <Text whiteSpace="pre-wrap">{text}</Text>
      </Box>
    </Box>
    <Box
      position="absolute"
      w="60%"
      top="3%"
      right={right && 0}
      left={!right && 0}
      transform={`translateX(${right ? '' :　'-'}50%)`}
    >
     <BackgroundImage
      src={src}
      ratio={100.05 / 101}
     />
    </Box>
  </Box>
);

export default Zone;
