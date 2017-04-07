import React, { PropTypes } from 'react'
import css from 'next/css'

const propTypes = {
  type:   PropTypes.string.isRequired,
  value:  PropTypes.string.isRequired,
  style:  PropTypes.object,
}

const Button = (props) =>
  <input type={props.type}
         value={props.value}
         className={css(button, props.style)} />

const button = css({
  color: '#000',
  float: 'left',
  padding: '15px 5px',
  border: '4px solid #fff',
  background: 'transparent',
  letterSpacing: '0.12em',
  width: '100%',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  ':hover': { backgroundColor: 'rgba(0,0,0,0)', color: '#fff' }
})

Button.propTypes = propTypes
export default Button
