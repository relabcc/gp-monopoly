import React from 'react';
import { chance, chanceSub } from '../../text';
import question from '../Zone/question.svg';

import mobileOrDesktop from '../ThemeProvider/mobileOrDesktop';

import MiddleCard from '../MiddleCard';

const Chance = () => (
  <MiddleCard
    top={mobileOrDesktop('16%', '50%')}
    left={mobileOrDesktop('50%', '17.5%')}
    transform={mobileOrDesktop('translateX(-50%)', 'translateY(-50%)')}
    src={question}
    text={chance}
    sub={chanceSub}
  />
);

export default Chance;
