import React, { PropTypes } from 'react'
import css from 'next/css'

export default class MovingText extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    movingtext: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.init()
  }

  init() {
    this.state = {
      mousePos: { x: 0, y: 0 }
    }
  }

  mouseMove(e) {
    this.setState({
      mousePos: {
        x: e.pageX - (window.innerWidth / 2),
        y: e.pageY - (window.innerHeight / 2)
      }
    })
  }

  render() {
    const { text, movingtext } = this.props

    let offset = {
      transform: `translate3d( ${this.state.mousePos.x / -100}px, ${this.state.mousePos.y / -100}px, 0 )`,
      textShadow: `${- this.state.mousePos.x / -90}px ${this.state.mousePos.y / 100}px rgba(0, 0, 0, 0.3)`
    }

    return (
      <div className={move} onMouseMove={this.mouseMove.bind(this)}>
        <h1 className={title}>I'm <span className={moving} style={offset}>Guillaume Kolly</span>.</h1>
      </div>
    )
  }
}

const move = css({
  height: '100vh',
  width: 'calc(100vh - 30px)',
  position: 'absolute',
  top: '0',
  left: '0',
  marginLeft: '30px',
})

const title = css({
  whiteSpace: 'nowrap',
  fontSize: '4em',
})

const moving = css({
  display: 'inline-block',
  color: '#0000ff',
  willChange: 'transform'
})
