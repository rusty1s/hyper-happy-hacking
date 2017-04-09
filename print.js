// \x1b[38;2;{red};{green};{blue}m{text}\x1b[0m\n  text
// \x1b[48;2;{red};{green};{blue}m{text}\x1b[0m\n  background

const path = require('path')

const R = require('ramda')
const Color = require('color')
const leftPad = require('left-pad')

const setBg = bg => `\x1b[48;2;${bg.red()};${bg.green()};${bg.blue()}m`
const setFg = fg => `\x1b[38;2;${fg.red()};${fg.green()};${fg.blue()}m`
const clear = () => '\x1b[0m'

const color = R.curry((bg, fg, str) => `${setBg(Color(bg))}${setFg(Color(fg))}${str}${clear()}`)

const theme = require(path.resolve(process.argv[2]))

const range = [...Array(16).keys()].map(x => leftPad(x, 2, 0))
process.stdout.write(`    ${range.join('   ')}\n`)
let i = 0
for (fg in theme.ansi) {
  process.stdout.write(`${leftPad(i, 2, 0)} `)
  i += 1
  for (bg in theme.ansi) {
    process.stdout.write(color(theme.ansi[bg], theme.ansi[fg], ' xx '))
    process.stdout.write(' ')
  }
  process.stdout.write('\n')
}
