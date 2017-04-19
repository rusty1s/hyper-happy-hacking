// @flow

// import type Theme from './theme-type'

// ANSI Colors.
const black = '#282828'
const lightBlack = '#3c3836'
const red = '#dc3c3c'
const green = '#689d6a'
const yellow = '#d79921'
const blue = '#458588'
const magenta = '#ce839d'
const cyan = '#00aba5'
const white = '#a89984'
const lightWhite = '#eee8d5'

// Basic Colors.
const backgroundColor = '#212121'
const foregroundColor = lightWhite
const selectionColor = lightWhite
const selectedTextColor = black
const linkColor = blue
const badgeColor = blue
const borderColor = 'transparent'
const cursorColor = magenta
const cursorTextColor = black

const theme = {
  ansi: {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite,
  },
  basic: {
    backgroundColor,
    foregroundColor,
    selectionColor,
    selectedTextColor,
    linkColor,
    badgeColor,
    borderColor,
    cursorColor,
    cursorTextColor,
  },
}

export default theme
