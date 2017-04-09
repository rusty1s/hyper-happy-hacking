const os = require('os')

const update = require('./update')
const theme = require('../dark-theme')

const configFile = `${os.homedir()}/Library/Preferences/com.googlecode.iterm2.plist`
// const configFile = `${os.homedir()}/Desktop/com.googlecode.iterm2.plist`

update(configFile, 'Happy Hacking Dark', theme)
  .fork(
    console.error,
    _ => console.log('Successfully updated iterm configuration.')
  )
