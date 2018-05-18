import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Box from '../src/components/Box';
import Block from '../src/components/Block';
import linkbox from '../src/text/linkbox';

storiesOf('Layouts', module)
  .add('Box', () => (
    <Box>
      <Box height="50vh" width={400} bg="teal" />
      <Block
        type="policy"
        width="10em"
        src={linkbox[0][0].src}
        text={linkbox[0][0].text}
        />
    </Box>
  ));
