import React, { PropTypes } from 'react'
import { Parallax, Background } from 'react-parallax'

const propTypes = {
  title:      PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
  strength:   PropTypes.number,
  style:      PropTypes.object
}

const defaultProps = {
  strength: 600,
  style:    null
}

const ParallaxBlock = (props) =>
  <div>
    <Parallax strength={props.strength}>
      <Background> {props.background} </Background>
      <div className={props.style.parallax}>
        <h2 className={props.style.title}> {props.title} </h2>
      </div>
    </Parallax>
    <div className={props.style.content}> {props.children} </div>
  </div>

ParallaxBlock.propTypes = propTypes
ParallaxBlock.defaultProps = defaultProps
export default ParallaxBlock
