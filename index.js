module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

const backgroundColor = 'rgba(41, 44, 54, .7)';
const foregroundColor = '#ffffff';
const borderColor = 'transparent';
const cursorColor = 'magenta';

const colors = {
  black: '#292c36',
  red: '#dc3c3c',
  green: '64878f',
  yellow: '#d28e5d',
  blue: '#4670d8',
  magenta: '#b73999',
  cyan: '#00aba5',
  white: '#999999',
  lightBlack: '#333333',
  lightRed: '#666666',
  lightGreen: '#52bd58',
  lightYellow: '#05c76f',
  lightBlue: '#4670d8',
  lightMagenta: '#8485ce',
  lightCyan: '#00aba5',
  lightWhite: '#ffffff',
};

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
    }

    .cursor-node[focus=true] {
      mix-blend-mode: difference;
    }
  `,
  bell: false,
});
