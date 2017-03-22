import React, { PropTypes } from 'react'
import css from 'next/css'
import Particles from 'react-particles-js'

export default class FullBackground extends React.Component {

  render() {
    return (
      <div className={background}>
        <Particles height="100vh" width="100vw" params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: { value: "#63E7AF" },
            line_linked: {
              enable: true,
              distance: 130,
              color: "#000",
              opacity: 0.2,
              width: 2,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
            },
            retina_detect: true,
          }
        }} />
      </div>
    )
  }
}

const background = css({
  backgroundColor: '#fff',
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: '0',
  left: '0',
  zIndex: '-1',
})
