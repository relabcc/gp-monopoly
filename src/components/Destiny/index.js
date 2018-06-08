import React from 'react';
import { destiny, destinySub } from '../../text';
import exclamation from '../Zone/exclamation.svg';

import mobileOrDesktop from '../ThemeProvider/mobileOrDesktop';
import MiddleCard from '../MiddleCard';

const Destiny = () => (
  <MiddleCard
    bottom={mobileOrDesktop('16%', '50%')}
    right={mobileOrDesktop('50%', '17.5%')}
    transform={mobileOrDesktop('translateX(50%)', 'translateY(50%)')}
    src={exclamation}
    text={destiny}
    sub={destinySub}
  />
);

export default Destiny;
