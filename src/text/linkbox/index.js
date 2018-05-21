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

const top = [
  {
    module: 'Go',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'earth',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'kangaroo',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'crow',
  },
].map(transformer);

const bottom = [
  {
    module: 'Zone',
    type: 'exclamation',
    key: 'emission',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'drop',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'meter',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'bolt',
  },
].map(transformer);

const middle = [
  {
    module: 'Zone',
    type: 'question',
    key: 'saving',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'bear',
  },

  {
    module: 'Zone',
    type: 'exclamation',
    key: 'factory',
  },
  {
    module: 'Block',
    type: 'policy',
    key: 'eagle',
  },

  {
    module: 'Block',
    type: 'change',
    key: 'denmark',
  },
  {
    module: 'Zone',
    type: 'question',
    key: 'potential',
    right: true,
  },

  {
    module: 'Block',
    type: 'change',
    key: 'netherland',
  },
  {
    module: 'Zone',
    type: 'exclamation',
    key: 'taiwan',
    right: true,
  },
  {
    module: 'Block',
    type: 'change',
    key: 'germany',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'cloud',
  },

  {
    module: 'Zone',
    type: 'question',
    key: 'network',
  },
  {
    module: 'Block',
    type: 'info',
    key: 'money',
  },
].map(transformer);

export default [
  top,
  ...chunk(middle, 2).map((row) => [row[0], { module: 'None' }, row[1]]),
  bottom,
];
