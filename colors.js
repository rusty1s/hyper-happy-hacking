const wwdc16 = {
  black: '#292c36',
  red: '#dc3c3c',
  green: '#64878f',
  yellow: '#d28e5d',
  blue: '#4670d8',
  magenta: '#b73999',
  cyan: '#00aba5',
  white: '#999999',
  lightBlack: '#333333',
  lightRed: '#666666',
  lightGreen: '#52bd58',
  lightYellow: '#95c76f',
  lightBlue: '#4670d8',
  lightMagenta: '#8485ce',
  lightCyan: '#00aba5',
  lightWhite: '#ffffff',
};

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
  white: '#999999',
  lightWhite: '#eee8d5',
};

const solarizedDark = {
  black: '#002b36',
  lightBlack: '#073642',
  red: '#dc322f',
  lightRed: '#cb4b16',
  green: '#859900',
  lightGreen: '#586e75',
  yellow: '#b58900',
  lightYellow: '#657b83',
  blue: '#268bd2',
  lightBlue: '#839496',
  magenta: '#d33682',
  lightMagenta: '#6c71c4',
  cyan: '#2aa198',
  lightCyan: '#93a1a1',
  white: '#eee8d5',
  lightWhite: '#fdf7e3',
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
