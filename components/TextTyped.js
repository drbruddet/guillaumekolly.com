import React, { PropTypes } from 'react'
import Typist from 'react-typist'

const propTypes = {
  style:          PropTypes.object,
  children:       PropTypes.array.isRequired,
  avgTypingDelay: PropTypes.number,
  stdTypingDelay: PropTypes.number,
  startDelay:     PropTypes.number,
  hideWhenDone:   PropTypes.bool
}

const defaultProps = {
  style:          null,
  avgTypingDelay: 50,
  stdTypingDelay: 20,
  startDelay:     1000,
  hideWhenDone:   true
}

const TextTyped = (props) =>
  <div className={props.style}>
    <Typist
      avgTypingDelay={props.avgTypingDelay}
      stdTypingDelay={props.stdTypingDelay}
      startDelay={props.startDelay}
      cursor={{hideWhenDone: props.hideWhenDone}}
    >
      {props.children}
    </Typist>
  </div>

TextTyped.propTypes = propTypes
TextTyped.defaultProps = defaultProps
export default TextTyped
