import React from 'react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'

import particles from '../data/particles'

export default class FullBackground extends React.Component {

  static propTypes = {}

  static getInitialProps () {
    return { particles: particles }
  }

  render() {
    return (
      <div className='fullbackground'>
        <Particles height="100vh" width="100vw" params={particles} />

        <style jsx>{`
          .fullbackground {
            position: fixed;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
        `}</style>
      </div>
    )
  }
}
