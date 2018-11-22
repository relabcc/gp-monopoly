import React from 'react';

import Text from '../Text';
import Link from '../Link';
import Box from '../Box';
import BackgroundImage from '../BackgroundImage';
import question from './question.svg';
import exclamation from './exclamation.svg';

const types = {
  question,
  exclamation,
};

const Zone = ({ src, text, type, right, href, highlight, ...props }) => (
  <Box
    border="2px solid black"
    bg={highlight ? 'teal' : 'gray'}
    transition={highlight ? '' : 'background 0.4s'}
    position="relative"
    {...props}
  >
    <Link href={href} target="_blank" data-label={text}>
      <Box pt="20%" />
      <Box
        px="5%"
        pb="0.5em"
        textAlign="center"
      >
        <Box px="34%" pb="0.25em">
          <BackgroundImage src={types[type]} ratio={112 / 72.69} />
        </Box>
        <Text whiteSpace="pre-wrap">{text}</Text>
      </Box>
      <Box
        position="absolute"
        w={["50%", null, "60%"]}
        top="3%"
        right={right && 0}
        left={!right && 0}
        transform={`translateX(${right ? '' :　'-'}36%)`}
      >
        <BackgroundImage
          src={src}
          ratio={100.05 / 101}
        />
      </Box>
    </Link>
  </Box>
);

export default Zone;
