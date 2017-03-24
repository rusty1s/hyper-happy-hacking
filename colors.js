const happyHacking = {
  black: '#212121',
  lightBlack: '#323232',
  red: '#dc3c3c',
  lightRed: '#dc3c3c',
  green: '#55a087',
  lightGreen: '#55a087',
  yellow: '#b58900',
  lightYellow: '#b58900',
  blue: '#65d7fd',
  lightBlue: '#65d7fd',
  magenta: '#ce839d',
  lightMagenta: '#ce839d',
  cyan: '#00aba5',
  lightCyan: '#00aba5',
  white: '#666666',
  lightWhite: '#eee8d5',
};

const colors = happyHacking;
const backgroundColor = colors.black;
const foregroundColor = colors.lightWhite;
const borderColor = 'transparent';
const cursorColor = colors.magenta;

if (typeof module !== undefined) module.exports= {
  backgroundColor,
  foregroundColor,
  borderColor,
  cursorColor,
  colors,
};
