const colors = require('./colors');

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

exports.decorateConfig = config => Object.assign({}, config, colors, {
  fontSize: 18,
  fontFamily: '"SF Mono", "Fira Code"',
  cursorShape: 'BLOCK',
  padding: '0 10px',
  termCSS: `
    ${config.termCSS || ''}

    @font-face { font-family: "SF Mono"; font-weight: 200; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Light.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 200; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-LightItalic.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 400; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Regular.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 400; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-RegularItalic.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 500; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Medium.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 500; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-MediumItalic.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 600; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Semibold.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 600; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-SemiboldItalic.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 700; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Bold.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 700; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-BoldItalic.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 800; font-style: normal; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-Heavy.otf); }
    @font-face { font-family: "SF Mono"; font-weight: 800; font-style: italic; src: url(file:///Applications/Utilities/Terminal.app/Contents/Resources/Fonts/SFMono-HeavyItalic.otf); }

    x-row {
      font-variant-ligatures: initial;
      line-height: 21px;
    }

    x-row > span {
    }

    .cursor-node[focus=true] {
      mix-blend-mode: difference;
    }
  `,
  bell: false,
});
