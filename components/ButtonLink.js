import React, { PropTypes } from 'react'
import Link from 'next/link'
import css from 'next/css'

const propTypes = {
  url:    PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  alt:    PropTypes.string,
  style:  PropTypes.object,
}

const ButtonLink = (props) =>
  <button className={css(button, props.style)}>
    <Link href={props.url}><a alt={props.alt}>{props.title}</a></Link>
  </button>

const button = css({
  margin: '5px 5px 5px 5px',
  padding: '15px 5px',
  border: "4px solid #000",
  background: 'transparent',
  letterSpacing: '0.12em',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  ':hover': {
    backgroundColor: '#000',
    color: '#fff',
    '> a': { color: '#fff'}
  },
  '> a': {
    color: '#000',
    textDecoration: 'none',
    padding: '10px',
  }
})

ButtonLink.propTypes = propTypes
export default ButtonLink
