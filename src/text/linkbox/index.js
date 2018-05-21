import chunk from 'lodash/chunk';

import crow from './crow.svg';
import earth from './earth.svg';
import kangaroo from './kangaroo.svg';
import bear from './bear.svg';
import eagle from './eagle.svg';
import denmark from './denmark.svg';
import germany from './germany.svg';
import netherland from './netherland.svg';
import drop from './drop.svg';
import cloud from './cloud.svg';
import bolt from './bolt.svg';
import meter from './meter.svg';
import money from './money.svg';
import saving from './saving.svg';
import taiwan from './taiwan.svg';
import potential from './potential.svg';
import network from './network.svg';
import factory from './factory.svg';
import emission from './emission.svg';
import { right } from 'styled-system/dist/styles';

const top = [
  {
    module: 'Go',
  },
  {
    module: 'Block',
    src: earth,
    type: 'policy',
    text: '國際再生能源署'
  },
  {
    module: 'Block',
    src: kangaroo,
    type: 'policy',
    text: '澳洲能源及環境政府部門'
  },
  {
    module: 'Block',
    type: 'policy',
    src: crow,
    text: '德國能源署'
  },
];
const bottom = [
  {
    module: 'Zone',
    type: 'exclamation',
    src: emission,
    text: '臺灣十大溫室氣體排放源'
  },
  {
    module: 'Block',
    type: 'info',
    src: drop,
    text: '臺灣雨水ph値觀測'
  },
  {
    module: 'Block',
    type: 'info',
    src: meter,
    text: '臺灣即時發電量資訊'
  },
  {
    module: 'Block',
    type: 'info',
    src: bolt,
    text: '國家能源消費統計'
  },
];
const middle = [
  {
    module: 'Zone',
    type: 'question',
    src: saving,
    text: '綠電合作社介紹'
  },
  {
    module: 'Block',
    type: 'policy',
    src: bear,
    text: '臺灣能源局'
  },

  {
    module: 'Zone',
    type: 'exclamation',
    src: factory,
    text: '臺灣發電現況'
  },
  {
    module: 'Block',
    type: 'policy',
    src: eagle,
    text: '美國能源資訊管理局'
  },

  {
    module: 'Block',
    type: 'change',
    src: denmark,
    text: '丹麥風力發電案例'
  },
  {
    module: 'Zone',
    type: 'question',
    src: potential,
    text: '臺灣再生能源潛力',
    right
  },

  {
    module: 'Block',
    type: 'change',
    src: netherland,
    text: '荷蘭生質能案例',
  },
  {
    module: 'Zone',
    type: 'exclamation',
    src: taiwan,
    text: '臺灣空氣品質地圖 PM2.5',
    right
  },
  {
    module: 'Block',
    type: 'change',
    src: germany,
    text: '德國在地發電案例'
  },
  {
    module: 'Block',
    type: 'info',
    src: cloud,
    text: '環保署空氣品質監測網'
  },

  {
    module: 'Zone',
    type: 'question',
    src: network,
    text: '公民電廠陽光伏特家'
  },
  {
    module: 'Block',
    type: 'info',
    src: money,
    text: '台電公開資訊'
  },
];

export default [
  top,
  ...chunk(middle, 2).map((row) => [row[0], { module: 'None' }, row[1]]),
  bottom,
];
