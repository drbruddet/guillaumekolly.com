import React, { PropTypes } from 'react'
import Link from 'next/link'
import css from 'next/css'

const propTypes = {
  url:    PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  blank:  PropTypes.bool,
  alt:    PropTypes.string,
  style:  PropTypes.object,
}

const ButtonLink = (props) =>
  <div className={css(button, props.style)}>
    <Link href={props.url}>
      <a target={"_blank" ? props.blank : ""} alt={props.alt}>
        {props.title}
      </a>
    </Link>
  </div>

const button = css({
  background: 'transparent',
  fontSize: '1.3em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  WebkitTransition: 'all 600ms',
  MozTransition: 'all 600ms',
  OTransition: 'all 600ms',
  MsTransition: 'all 600ms',
  transition: 'all 600ms',
  '> a': {
    color: '#000',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
  },
  ':hover': { '> a': { color: '#fff', backgroundColor: '#000' } }
})

ButtonLink.propTypes = propTypes
export default ButtonLink
