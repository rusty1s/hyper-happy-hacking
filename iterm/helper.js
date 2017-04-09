const checkIfOnMac = _ => os.platform() !== 'darwin' ? Left('Not on mac osx.') : Right(_)
const checkIfItermInstalled = _ =>
  spawn.sync('open', ['-R', '-a', 'iterm']).status === 0 ? Left('Iterm not installed.') : Right(_)
