import React from 'react';
import Text from './Text';

const BigLetter = (props) => (
  <Text
    f={['1.5em', '2.5em', '2.5em']}
    fontWeight="600"
    {...props}
  />
);

export default BigLetter;
