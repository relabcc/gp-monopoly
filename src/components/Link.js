import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';
import get from 'lodash/get';
import ReactGA from 'react-ga';

import blacklist from './utils/blacklist';
import { getColorByPropKey } from './utils/getColor';

const Link = styled(tag.a)`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  text-decoration: none;
  &:hover {
    color: ${getColorByPropKey('hoverColor')};
    text-decoration: underline;
  }
`;

Link.defaultProps = {
  blacklist,
  color: 'black',
  hoverColor: 'black',
  fontWeight: 'normal',
  onClick: (e) => {
    const label = get(e.currentTarget, 'dataset.label', e.currentTarget.href);
    ReactGA.event('Click', {
      action: 'click',
      category: 'Outbound Links',
      label,
    });
  }
};

export default Link;
