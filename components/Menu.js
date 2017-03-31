import React, { PropTypes } from 'react'
import Link from 'next/link'

const propTypes = {
  links: PropTypes.array.isRequired,
  style: PropTypes.object
}

const renderLinks = (links, style) => {
  return links.map( (link, i) => {
    return link.type === 'email'
      ? <a key={i} className={style.link} href={ link.url }>{ link.name }</a>
      : <Link key={i} href={ link.url }>
          <a className={style.link} target="_blank">{ link.name }</a>
        </Link>
  })
}

const Menu = (props) =>
  <div className={props.style.component}>
    {renderLinks(props.links, props.style)}
  </div>

Menu.propTypes = propTypes
export default Menu
