import React from 'react'

import ThemeColor from './ThemeColor'
import './Theme.css'

const Theme = ({ colors: { ansi, basic } }) => (
  <div
    className="theme"
    style={{ background: basic.backgroundColor, color: basic.foregroundColor }}
  >
    <h1>Theme</h1>
    <h2>Ansi</h2>
    {renderGrid(ansi)}
    <h2>Basic</h2>
    {renderGrid(basic)}
  </div>
)

const renderGrid = colors => (
  <section className="theme__grid">
    {Object.keys(colors).map(key => (
      <ThemeColor key={key} name={key} color={colors[key]} />
    ))}
  </section>
)

export default Theme
