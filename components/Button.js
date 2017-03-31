import React, { PropTypes } from 'react'
import css from 'next/css'

const propTypes = {
  type:   PropTypes.string.isRequired,
  value:  PropTypes.string.isRequired,
  style:  PropTypes.object,
}

const Button = (props) =>
  <input type={props.type} value={props.value} className={css(button, props.style)} />

const button = css({
  background: '#fff',
  color: '#000',
  padding: '10px 5px',
  border: 'none',
  width: '100%',
  fontSize: '1.1em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
})

Button.propTypes = propTypes
export default Button
