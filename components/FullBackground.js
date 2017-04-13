import React, { PropTypes } from 'react'
import css from 'next/css'
import Particles from 'react-particles-js'

import particles from '../data/particles'

export default class FullBackground extends React.Component {

  static propTypes = {
    style: PropTypes.object
  }

  static getInitialProps () {
    return { particles: particles }
  }

  render() {
    const { style } = this.props

    return (
      <div className={css(fullScreen, style)}>
        <Particles height="100vh" width="100vw" params={particles} />
      </div>
    )
  }
}

const fullScreen = css({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0'
})
