import merge from 'lodash/merge';
import constants from 'styled-system/dist/constants';

const emToPx = (em) => em * 16;

export const breakpoints = [36, 62, 80].map(emToPx);
export const containerWidth = [36, 46, 46, 80].map(emToPx);

const font = '"Gen Jyuu Gothic", "PingFang TC", "HeiTi TC", "Microsoft JhengHei", sans-serif';

const white = '#fff';
const black = '#000';
const teal = '#27C1AE';
const gray = '#CCCCCC';

export default merge(constants, {
  colors: {
    white,
    black,
    teal,
    gray,
    primary: teal,
    secondary: 'orange',
  },
  breakpoints,
  containerWidth,
  font,
  duration: 250,
});
