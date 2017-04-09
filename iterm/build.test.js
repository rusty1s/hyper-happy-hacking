const rewire = require('rewire')

const build = rewire('./iterm/build')

test('parse css color string', () => {
  const parseColor = build.__get__('parseColor')

  expect(parseColor('#112233').red()).toBe(17)
  expect(parseColor('#112233').green()).toBe(34)
  expect(parseColor('#112233FF').alpha()).toBe(1)
  expect(parseColor('transparent').alpha()).toBe(0)
  expect(parseColor('rgb(255, 128, 30)').blue()).toBe(30)
  expect(parseColor('rgba(255, 128, 30, 0.5)').alpha()).toBe(0.5)
  expect(parseColor('red').red()).toBe(255)

  expect(() => parseColor('112233')).toThrow()
})

test('parse css color strings', () => {
  const parse = build.__get__('parse')

  const colors_arr = parse(['#000000', '#FFFFFF'])
  expect(colors_arr.length, 2)
  expect(colors_arr[0].red()).toBe(0)
  expect(colors_arr[1].red()).toBe(255)

  const colors_dict = parse({ color1: '#000000', color2: '#FFFFFF' })
  expect(colors_dict.length, 2)
  expect(colors_dict.color1.red()).toBe(0)
  expect(colors_dict.color2.red()).toBe(255)
})

test('get red, green, blue values', () => {
  const parseColor = build.__get__('parseColor')
  const getRGB = build.__get__('getRGB')

  const rgb = getRGB(parseColor('rgb(255, 128, 30)'))
  expect(rgb.length, 3)
  expect(rgb['Red Component']).toBe(255)
  expect(rgb['Green Component']).toBe(128)
  expect(rgb['Blue Component']).toBe(30)
})
