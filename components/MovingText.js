import React, { PropTypes } from 'react'
import css from 'next/css'

export default class MovingText extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    movingtext: PropTypes.string.isRequired,
    style: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.init()
  }

  init() {
    this.state = { mousePos: { x: 0, y: 0 } }
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
      textShadow: `${- this.state.mousePos.x / -90}px ${this.state.mousePos.y / 100}px rgba(99, 231, 175, 0.9)`
    }

    return (
      <div
        className={this.props.style}
        onMouseMove={ this.mouseMove.bind(this) } >
        <h1 className={title}>I'm&nbsp;
          <span className={movingtitle}
            style={offset}>Guillaume Kolly
          </span>.
        </h1>
      </div>
    )
  }
}

const title = css({
  whiteSpace: 'nowrap',
  position: 'absolute',
  fontSize: '4em',
  right: '10%',
  top: '30%',
})

const movingtitle = css({
  display: 'inline-block',
  color: '#2b2b2b',
  willChange: 'transform'
})
