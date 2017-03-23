import React, { PropTypes } from 'react'
import css from 'next/css'
import Link from 'next/link'

export default class Menu extends React.Component {

  static propTypes = {
    links: PropTypes.array.isRequired,
    style: PropTypes.object
  }

  renderLinks = (links, style) => {
    return links.map( (link, i) => {
      if (link.type === 'email') {
        return <a key={i} className={style.link} href={ link.url }>{ link.name }</a>
      } else {
        return (
          <Link key={i} href={ link.url }>
            <a className={style.link} target="_blank">{ link.name }</a>
          </Link>
        )
      }
    })
  }

  render() {
    const { links, style } = this.props

    return (
      <div className={style.component}>
        {this.renderLinks(links, style)}
      </div>
    )
  }
}
