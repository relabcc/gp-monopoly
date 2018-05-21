import { injectGlobal } from 'styled-components';
import regularWoff from './minified/GenJyuuGothic-Regular.woff';
import regularTtf from './minified/GenJyuuGothic-Regular.ttf';

import mediumyWoff from './minified/GenJyuuGothic-Medium.woff';
import mediumyTtf from './minified/GenJyuuGothic-Medium.ttf';

injectGlobal`
  @font-face {
    font-family: 'Gen Jyuu Gothic';
    src: local("Gen Jyuu Gothic Medium"),
      url(${mediumyWoff}),
      url(${mediumyTtf});
    font-weight: 600;
  }

  @font-face {
    font-family: 'Gen Jyuu Gothic';
    src: local("Gen Jyuu Gothic Regular"),
      url(${regularWoff}),
      url(${regularTtf});
    font-weight: 400;
  }
`;
