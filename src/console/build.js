// @flow

import builder from 'xmlbuilder'
import Color from 'color'

import { type AnsiType } from '../theme-type'
import darkTheme from '../dark-theme'

type ColorType = { id: string, r: string, g: string, b: string }
const convert = (id: number, color: string): ColorType => {
  const rgb = Color(color)
  return {
    id: `${id}`,
    r: `${rgb.red()}`,
    g: `${rgb.green()}`,
    b: `${rgb.blue()}`,
  }
}

const buildAnsi = (ansi: AnsiType): string => {
  const colors = builder.create('settings')
    .ele('console')
      .ele('colors')

  colors.ele('color', convert(0, ansi.black))
  colors.ele('color', convert(1, ansi.blue))
  colors.ele('color', convert(2, ansi.green))
  colors.ele('color', convert(3, ansi.cyan))
  colors.ele('color', convert(4, ansi.red))
  colors.ele('color', convert(5, ansi.magenta))
  colors.ele('color', convert(6, ansi.yellow))
  colors.ele('color', convert(7, ansi.lightBlack))
  colors.ele('color', convert(8, ansi.white))
  colors.ele('color', convert(9, ansi.lightBlue))
  colors.ele('color', convert(10, ansi.lightGreen))
  colors.ele('color', convert(11, ansi.lightCyan))
  colors.ele('color', convert(12, ansi.lightRed))
  colors.ele('color', convert(13, ansi.lightMagenta))
  colors.ele('color', convert(14, ansi.lightYellow))
  colors.ele('color', convert(15, ansi.lightWhite))

  return colors.end({ pretty: true })
}

console.log(buildAnsi(darkTheme.ansi));


// <?xml version="1.0"?>
// <settings>
// 	<console>
// 		<colors>
// 			<color id="0" r="39" g="40" b="34"/>  <!-- Black -->
// 			<color id="12" r="249" g="38" b="114"/>  <!-- Red -->
// 			<color id="13" r="250" g="69" b="148"/>  <!-- Magenta -->
// 			<color id="14" r="255" g="244" b="141"/>  <!-- Yellow -->
// 			<color id="15" r="255" g="255" b="255"/>  <!-- White (Number, Diff Text) -->
// 		</colors>
// 	</console>
// 	<!-- Following tab-specific settings will not be imported automatically.
// 		 You need to manually add these to console.xml	-->
// 	<tabs>
// 		<tab>
// 			<cursor style="0" r="73" g="72" b="62"/>
// 			<background type="0" r="39" g="40" b="34">
// 				<image file="" relative="0" extend="0" position="0">
// 					<tint opacity="0" r="0" g="0" b="0"/>
// 				</image>
// 			</background>
// 		</tab>
// 	</tabs>
// </settings>
