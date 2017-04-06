const rewire = require('rewire')

const functions = rewire('./build')

test('parse css color string', () => {
  const parseColor = functions.__get__('parseColor')

  expect(parseColor('#112233').red()).toBe(100)
  expect(parseColor('112233').green()).toBe(100)
  expect(parseColor('112233FF').alpha()).toBe(1)
  expect(parseColor('transparent').alpha()).toBe(0)
  expect(parseColor('rgb(255, 128, 30)').blue()).toBe(30)
  expect(parseColor('rgba(255, 128, 30, 0.5)').alpha()).toBe(0.5)
})
