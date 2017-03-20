import React, { PropTypes } from 'react'
import Link from 'next/link'

export default class Menu extends React.Component {

  static propTypes = {
    links: PropTypes.array.isRequired
  }

  renderLinks() {
    return this.props.links.map( (link, i) => (
      <Link key={i} href={ link.url }>
        <a target="_blank">{ link.name }</a>
      </Link>
    ))
  }

  render() {
    return (
      <div>
        {this.renderLinks()}
      </div>
    )
  }
}
