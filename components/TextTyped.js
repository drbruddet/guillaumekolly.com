import React, { PropTypes } from 'react'
import Typist from 'react-typist'

const propTypes = {
  style:    PropTypes.object,
  children: PropTypes.array.isRequired,
}

const TextTyped = (props) =>
  <div className={props.style}>
    <Typist avgTypingSpeed={10}
            stdTypingDelay={30}
            startDelay={1000}
            cursor={{ hideWhenDone: true }} >
      {props.children}
    </Typist>
  </div>

TextTyped.propTypes = propTypes
export default TextTyped
