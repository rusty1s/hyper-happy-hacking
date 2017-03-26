const colors = {
  black: '#282828',
  red: '#dc3c3c',
  green: '#689d6a',
  yellow: '#d79921',
  blue: '#458588',
  magenta: '#ce839d',
  cyan: '#00aba5',
  white: '#a89984',
  lightBlack: '#3c3836',
  lightRed: '#dc3c3c',
  lightGreen: '#689d6a',
  lightYellow: '#d79921',
  lightBlue: '#458588',
  lightMagenta: '#ce839d',
  lightCyan: '#00aba5',
  lightWhite: '#eee8d5',
};

const backgroundColor = '#212121';
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
