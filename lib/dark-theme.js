'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


// import type Theme from './theme-type'

// ANSI Colors.
var black = '#282828';
var lightBlack = '#3c3836';
var red = '#dc3c3c';
var green = '#689d6a';
var yellow = '#d79921';
var blue = '#458588';
var magenta = '#ce839d';
var cyan = '#00aba5';
var white = '#a89984';
var lightWhite = '#eee8d5';

// Basic Colors.
var backgroundColor = '#212121';
var foregroundColor = lightWhite;
var selectionColor = lightWhite;
var selectedTextColor = black;
var linkColor = blue;
var badgeColor = blue;
var borderColor = 'transparent';
var cursorColor = magenta;
var cursorTextColor = black;

var theme = {
  ansi: {
    black: black,
    red: red,
    green: green,
    yellow: yellow,
    blue: blue,
    magenta: magenta,
    cyan: cyan,
    white: white,
    lightBlack: lightBlack,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: lightWhite
  },
  basic: {
    backgroundColor: backgroundColor,
    foregroundColor: foregroundColor,
    selectionColor: selectionColor,
    selectedTextColor: selectedTextColor,
    linkColor: linkColor,
    badgeColor: badgeColor,
    borderColor: borderColor,
    cursorColor: cursorColor,
    cursorTextColor: cursorTextColor
  }
};

exports.default = theme;