import React, { PropTypes } from 'react'
import css from 'next/css'
import Link from 'next/link'

export default class Menu extends React.Component {

  static propTypes = {
    links: PropTypes.array.isRequired
  }

  renderLinks() {
    return this.props.links.map( (link, i) => {
      if (link.type === 'email') {
        return <a className={a} href={ link.url }>{ link.name }</a>
      } else {
        return (
          <Link key={i} href={ link.url }>
            <a className={a} target="_blank">{ link.name }</a>
          </Link>
        )
      }
    })
  }

  render() {
    return (
      <div {...this.props}>
        {this.renderLinks()}
      </div>
    )
  }
}

const a = css({
  margin: '0 10px 0 0',
  textDecoration: 'none',
  color: '#000',
  ':hover': {
    textDecoration: 'line-through',
  }
})
