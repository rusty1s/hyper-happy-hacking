const exec = require('child_process').exec

const R = require('ramda')
const { Identity, Future } = require('ramda-fantasy')

const quote = R.pipe(
  str => str.split(':'),
  R.map(str => `\\"${str}\\"`),
  list => list.join(':')
)

// /usr/libexec/PlistBuddy -c "Set :{key} {value}" {file}
const set = R.curry((key, value, file) =>
  Identity.of(key)
  .map(quote)
  .chain(quotedKey => Future((reject, resolve) =>
  exec(`/usr/libexec/PlistBuddy -c "Set :${quotedKey} ${value}" ${file}`, err =>
    err ? reject(`Could not set value of ${key} to ${value}.`) : resolve(file)))))

// /usr/libexec/PlistBuddy -c "Delete :{key}" {file}
const remove = R.curry((key, file) =>
  Identity.of(key)
  .map(quote)
  .chain(quotedKey => Future((reject, resolve) =>
  exec(`/usr/libexec/PlistBuddy -c "Delete :${quotedKey}" ${file}`, err =>
    err ? reject(`Could not remove ${key}.`) : resolve(file)))))

// defaults read {file}
const reload = file => Future((reject, resolve) =>
  exec(`defaults read ${file}`, err =>
    err ? reject(`Could not reload ${file}.`) : resolve(file)))

const removeCustomColorschemes = remove('Custom Color Presets')
const setWidth = set('New Bookmarks:0:Columns')
const setHeight = set('New Bookmarks:0:Rows')

const setRGB = R.curry((theme, name, { red, green, blue }, file) =>
  Identity.of(file)
  .chain(set(`New Bookmarks:0:${name}:Red Component`, red))
  .chain(set(`New Bookmarks:0:${name}:Green Component`, green))
  .chain(set(`New Bookmarks:0:${name}:Blue Component`, blue)))
  // .chain(set(`Custom Color Presets:${theme}:${name}:Red Component`, red))
  // .chain(set(`Custom Color Presets:${theme}:${name}:Green Component`, green))
  // .chain(set(`Custom Color Presets:${theme}:${name}:Blue Component`, blue)))
  // .chain(set(`Custom Color Presets:${theme}:${name}:Alpha Component`, alpha)))
  //

const setRGBA = R.curry((theme, name, { red, green, blue, alpha}, file) =>
  Identity.of(file)
  .chain(setRGB(theme, name, { red, green, blue }))
  .chain(set(`New Bookmarks:0:${name}:Alpha Component`, alpha)))
  // .chain(set(`Custom Color Presets:${theme}:${name}:Alpha Component`, alpha)))

const update = file, colors =>
  Identity.of(file)
  // .chain(set('"New Bookmarks":0:"Columns"', 11))
  .chain(setWidth(101))
  .chain(setHeight(11))
  .chain(setRGB('bla', 'Foreground Color', { red: 1, green: 0.5, blue: 0, alpha: 0.5 }))
  .chain(setRGB('bla', 'Background Color', { red: 0.5, green: 0.5, blue: 0.2, alpha: 0.5 }))
  .chain(setRGBA('bla', 'Cursor Guide Color', { red: 1, green: 0, blue: 0, alpha: 0.5 }))
  .chain(reload)
  .fork(console.error, R.identity)

const colors =
update('/Users/rusty1s/Library/Preferences/com.googlecode.iterm2.plist', colors)
