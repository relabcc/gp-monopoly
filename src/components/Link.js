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
    if (window.gtag) {
      const label = get(e.currentTarget, 'dataset.label', e.currentTarget.href);
      window.gtag('event', 'Click', {
        'event_category': 'Outbound Links',
        'event_label': label,
      });
    }
  }
};

export default Link;
