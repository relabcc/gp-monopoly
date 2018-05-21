
const map = require('lodash/map');

const {
  chance,
  chanceSub,
  destiny,
  destinySub,
  siteTitle
} = require('../text');
const legend = require('../text/legend/text');
const linkbox = require('../text/linkbox/text');

const fontMin = require('./fontMin');

const sourceText = {
  400: [chanceSub, destinySub]
    .concat(map(legend))
    .concat(map(linkbox)),
  600: [siteTitle, chance, destiny],
}

fontMin(sourceText).then(process.exit)
  .catch(console.error);
