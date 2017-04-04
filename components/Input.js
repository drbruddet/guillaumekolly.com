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
    <input type={props.type}
           name={props.name}
           className={input}
           placeholder={props.placeholder ? props.placeholder : props.name}
           required />
         <span className={animation} />
  </div>

const input = css({
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #fff',
  fontSize: '1em',
  margin: '0em 0 1.875em 0',
  padding: '0 0 0.875em 0',
  width: '100%',
  ':focus': {
    outline: 'none',
    padding: '0 0 0.875em 0',
  },
  ':focus ~ span': {
    marginLeft: '-50px'
  }
})

const animation = css({
  WebkitTransition: 'all 0.5s linear',
  MozTransition: 'all 0.5s linear',
  MsTransition: 'all 0.5s linear',
  OTransition: 'all 0.5s linear',
  transition: 'all 0.5s linear',
  content: '',
})

Input.propTypes = propTypes
export default Input
