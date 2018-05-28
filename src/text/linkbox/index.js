import chunk from 'lodash/chunk';
import images from './images';
import text from './text';

const transformer = (item) => {
  const { key } = item;
  if (!key) return item;
  return {
    ...item,
    text: text[key],
    src: images[key],
  };
}

const all = [
  {
    module: 'Go',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'earth',
    href: 'http://www.irena.org/newsroom',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'kangaroo',
    href: 'http://www.environment.gov.au/',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'crow',
    href: 'https://www.dena.de/en/about-dena/',
  },
  {
    module: 'Zone',
    type: 'question',
    key: 'saving',
    href: 'http://e-info.org.tw/node/202157',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'bear',
    href: 'https://www.moeaboe.gov.tw/ECW/populace/content/SubMenu.aspx?menu_id=48',
  },

  {
    module: 'Zone',
    type: 'exclamation',
    key: 'factory',
    href: 'http://www.taipower.com.tw/tc/page.aspx?mid=206',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'eagle',
    href: 'https://www.eia.gov/',
  },
  {
    module: 'Block',
    type: 'change',
    key: 'denmark',
    href: 'http://e-info.org.tw/node/113350',
  },
  {
    module: 'Zone',
    type: 'question',
    key: 'potential',
    href: 'https://www.thenewslens.com/article/41324',
    right: true,
  },

  {
    module: 'Block',
    type: 'change',
    key: 'netherland',
    href: 'http://www.seinsights.asia/article/3291/3271/3942',
  },
  {
    module: 'Zone',
    type: 'exclamation',
    key: 'taiwan',
    href: 'https://www.taiwanstat.com/realtime/air-map/',
    right: true,
  },
  {
    module: 'Block',
    type: 'change',
    key: 'germany',
    href: 'https://www.csronereporting.com/news/show/4166',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'cloud',
    href: 'https://taqm.epa.gov.tw/taqm/tw/default.aspx',
  },

  {
    module: 'Zone',
    type: 'question',
    key: 'network',
    href: 'http://www.verymulan.com/issue/%E3%80%8C%E6%88%91%E5%80%91%E8%B6%85%E6%83%B3%E8%A6%81%E7%B6%A0%E8%89%B2%E8%83%BD%E6%BA%90%E3%80%8D%EF%BC%8C%E7%82%BA%E4%BB%80%E9%BA%BC%E6%AF%94%E8%B5%B7%E9%88%94%E7%A5%A8%EF%BC%8C%E4%BB%96%E5%80%91%E6%9B%B4%E6%83%B3%E8%A6%81%E5%A4%AA%E9%99%BD%E8%83%BD%E6%9D%BF%EF%BC%9F-14461.html?author_id=47',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'money',
    href: 'https://www.taipower.com.tw/tc/page.aspx?mid=413',
  },
  {
    module: 'Zone',
    type: 'exclamation',
    key: 'emission',
    href: 'http://rsprc.ntu.edu.tw/zh-TW/m01/risk-society/197-articles_overall_category/article-discusses-the-classification/energy_trans/769-open-energy_1060907',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'drop',
    href: 'https://www.taiwanstat.com/realtime/rain-ph/',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'meter',
    href: 'https://www.taiwanstat.com/realtime/power/',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'bolt',
    href: 'https://web3.moeaboe.gov.tw/wesnq/Views/C01/wFrmC0101.aspx',
  },
].map(transformer);

const getTable = (perRow) => {
  const allWithWidth = all.map((item) => ({ ...item, w: 1 / perRow }));
  const top = allWithWidth.slice(0, perRow);
  const bottom = allWithWidth.slice(20 - perRow);
  const middle = allWithWidth.slice(perRow, 20 - perRow);
  const middleLength = perRow - 2;

  return  [
    top,
    ...chunk(middle, 2).map((row) => [
      row[0],
      { module: 'None', w: middleLength / perRow, colSpan: middleLength  },
      row[1],
    ]),
    bottom,
  ];
};

export default getTable;
