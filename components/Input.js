import React, { PropTypes } from 'react'
import css from 'next/css'

const propTypes = {
  type:         PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  placeholder:  PropTypes.string,
  style:        PropTypes.object,
}

const Input = (props) =>
  <div className={props.style}>
    <label htmlFor={props.name}></label>
    <input  type={props.type}
            name={props.name}
            className={input}
            placeholder={props.placeholder ? props.placeholder : props.name}
    />
  </div>

const input = css({
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #2b2b2b',
  fontSize: '1em',
  margin: '0em 0 1.875em 0',
  padding: '0 0 0.875em 0',
  width: '100%',
  WebkitBoxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  MsBoxSizing: 'border-box',
  OBoxSizing: 'border-box',
  boxSizing: 'border-box',
  WebkitTransition: 'all 0.3s',
  MozTransition: 'all 0.3s',
  MsTransition: 'all 0.3s',
  OTransition: 'all 0.3s',
  transition: 'all 0.3s',
  ':focus': {
    outline: 'none',
    padding: '0 0 0.875em 0',
  }
})

Input.propTypes = propTypes
export default Input
