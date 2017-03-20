import React, { PropTypes } from 'react'
import css from 'next/css'
import Link from 'next/link'

export default class Menu extends React.Component {

  static propTypes = {
    links: PropTypes.array.isRequired
  }

  renderLinks() {
    return this.props.links.map( (link, i) => (
      <Link key={i} href={ link.url }>
        <a className={a} target="_blank">{ link.name }</a>
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

const a = css({
  color: '#000',
  fontSize: '1em',
  margin: '0 10px 0 0',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'line-through',
  }
})
