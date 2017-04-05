const fs = require('fs');

const Color = require('color');
const plist = require('plist');

const colors = require('./dark');

const rescale = value => value / 255;

const parseColor = (color) => {
  color = new Color(color);

  return {
    'Red Component': rescale(color.red()),
    'Green Component': rescale(color.green()),
    'Blue Component': rescale(color.blue()),
    'Alpha Component': color.alpha(),
    'Color Space': 'sRGB',
  };
};

const keymap = {
  'Ansi 0 Color': colors.ansi.black,
  'Ansi 1 Color': colors.ansi.red,
  'Ansi 2 Color': colors.ansi.green,
  'Ansi 3 Color': colors.ansi.yellow,
  'Ansi 4 Color': colors.ansi.blue,
  'Ansi 5 Color': colors.ansi.magenta,
  'Ansi 6 Color': colors.ansi.cyan,
  'Ansi 7 Color': colors.ansi.white,
  'Ansi 8 Color': colors.ansi.lightBlack,
  'Ansi 9 Color': colors.ansi.lightRed,
  'Ansi 10 Color': colors.ansi.lightGreen,
  'Ansi 11 Color': colors.ansi.lightYellow,
  'Ansi 12 Color': colors.ansi.lightBlue,
  'Ansi 13 Color': colors.ansi.lightMagenta,
  'Ansi 14 Color': colors.ansi.lightCyan,
  'Ansi 15 Color': colors.ansi.lightWhite,
  'Background Color': colors.basic.backgroundColor,
  'Foreground Color': colors.basic.foregroundColor,
  'Bold Color': colors.basic.foreground,
  'Link Color': colors.basic.linkColor,
  'Selection Color': colors.basic.selectionColor,
  'Selected Text Color': colors.basic.selectedTextColor,
  'Badge Color': colors.basic.badgeColor,
  'Tab Color': colors.basic.backgroundColor,
  'Cursor Color': colors.basic.cursorColor,
  'Cursor Text Color': colors.basic.cursorTextColor,
  'Cursor Guide Color': colors.ansi.black,
};

const dict = Object.keys(keymap).reduce((dict, key) => {
  dict[key] = parseColor(keymap[key])
  return dict;
}, {});

fs.writeFile('Happy Hacking Dark.itermcolors', plist.build(dict), (err) => {
  if (err) throw err;
});
