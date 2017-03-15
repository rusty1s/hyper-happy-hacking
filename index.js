const colors = require('./colors');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

exports.decorateConfig = config => Object.assign({}, config, colors, {
  fontSize: 18,
  fontFamily: 'Fira Code',
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
