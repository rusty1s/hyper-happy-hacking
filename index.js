const colors = require('./colors');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

exports.decorateConfig = config => Object.assign({}, config, colors, {
  fontSize: 18,
  fontFamily: '"Fira Code", monospace',
  cursorShape: 'BLOCK',
  padding: '0 10px',
  termCSS: `
    ${config.termCSS || ''}

    @font-face {
      font-family: "Fira Code";
      font-weight: normal;
      font-style: normal;
      src: url(file:///${__dirname}/FiraCode-Light.otf);
    }

    @font-face {
      font-family: "Fira Code";
      font-weight: bold;
      font-style: normal;
      src: url(file:///${__dirname}/FiraCode-Medium.otf);
    }

    x-row {
      font-variant-ligatures: initial;
      line-height: 22px;
    }

    .cursor-node[focus=true] {
      mix-blend-mode: difference;
    }
  `,
  bell: false,
});
