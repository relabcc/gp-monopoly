import React from 'react';

import Text from '../Text';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import Link from '../Link';

import change from './change-small.svg';
import info from './info-small.svg';
import policy from './policy-small.svg';

const types = {
  change,
  info,
  policy,
};

const Block = ({ src, text, type, href, ...props }) => (
  <Box
    w={1 / 4}
    border="2px solid black"
    bg="white"
    {...props}
  >
    <Link href={href} target="_blank">
      <Box
        px="40%"
        borderBottom="2px solid"
        bg="teal"
      >
        <BackgroundImage src={types[type]} ratio={36.9 / 34.75} />
      </Box>
      <Box
        px="5%"
        py="0.25em"
        textAlign="center"
      >
        <Box px="20%" py="0.5em">
          <BackgroundImage src={src} ratio={56 / 91.31} />
        </Box>
        <Text whiteSpace="pre-wrap">{text}</Text>
      </Box>
    </Link>
  </Box>
);

export default Block;
