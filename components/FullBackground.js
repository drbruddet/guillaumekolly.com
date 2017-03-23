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
                value: 80,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#000"
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#000",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            retina_detect: true
        }} />
      </div>
    )
  }
}

const background = css({
  backgroundColor: 'transparent',
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: '0',
  left: '0',
  zIndex: '-1',
})
