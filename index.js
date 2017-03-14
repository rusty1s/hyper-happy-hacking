const {
  backgroundColor,
  foregroundColor,
  borderColor,
  cursorColor,
  colors,
} = require('./colors');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

exports.decorateConfig = config => Object.assign({}, config, {
  fontSize: 18,
  fontFamily: 'Fira Code',
  backgroundColor,
  borderColor,
  cursorColor,
  colors,
  cursorShape: 'BLOCK',
  padding: '0 10px',
  termCSS: `
    ${config.termCSS || ''}

    x-row {
      font-variant-ligatures: initial;
      line-height: 23px;
    }

    .cursor-node[focus=true] {
      mix-blend-mode: difference;
    }
  `,
  bell: false,
});
