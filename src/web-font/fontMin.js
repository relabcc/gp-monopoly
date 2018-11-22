const Fontmin = require('fontmin');

const fontMinGen = (src, text) => [
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .dest('./minified'),
  new Fontmin()
    .src(src)
    .use(Fontmin.glyph({ text }))
    .use(Fontmin.ttf2woff())
    .dest('./minified'),
];

module.exports = (charMap) => {
  const fontminBold = fontMinGen(
    './source/GenJyuuGothic-Regular.ttf',
    charMap[400].join('')
  );
  const fontminHeavy = fontMinGen(
    './source/GenJyuuGothic-Medium.ttf',
    charMap[600].join('')
  );

  return Promise.all([...fontminBold, ...fontminHeavy].map((task) => new Promise((res, rej) => {
    task.run((err, files) => {
      if (err) {
        console.error(err);
        rej(err);
      }
      res();
    });
  })));
};
