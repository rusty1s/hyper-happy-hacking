import React, { Component } from 'react'
import Color from 'color'

// const negate = str => Color(str).negate().string()

class ThemeColor extends Component {
  render() {
  const { name } = this.props

   return (
     <div className="theme__color">
       <span>{name}</span>
     </div>
    );
  }
}

export default ThemeColor
