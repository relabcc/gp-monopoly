import crow from './crow.svg';
import earth from './earth.svg';
import kangaroo from './kangaroo.svg';
import question from './question.svg';
import exclamation from './exclamation.svg';
import bear from './bear.svg';
import eagle from './eagle.svg';

const first = [
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
  {
    module: 'Block',
    type: 'policy',
    src: bear,
    text: '臺灣能源局'
  },
  {
    module: 'Block',
    type: 'policy',
    src: eagle,
    text: '美國能源資訊管理局'
  },
];

const second = [
  {
    src: question,
    text: '綠電合作社介紹'
  },
  {
    src: exclamation,
    text: '臺灣發電現況'
  },
]

export default [
  first,
  second,
];
