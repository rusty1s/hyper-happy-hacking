import React from 'react'

import Theme from './Theme'
import colors from '../../dark-theme'

const App = () => (
  <div>
    <nav>
      <button>Import theme</button>
      <button>Create new theme</button>
    </nav>
    <Theme colors={colors} />
  </div>
)

export default App
