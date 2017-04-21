import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { theme } from './layout/Theme'

const propTypes = {
  links: PropTypes.array.isRequired
}

const renderLinks = (links) => {
  return links.map( (link, i) => {
    return link.type === "email"
      ? <a key={i} href={link.url} className="link">{link.name}</a>
      : <Link key={i} href={link.url}>
        <a target="_blank" className="link">{link.name}</a>
      </Link>
  })
}

const Menu = (props) =>
  <div className={props.vertical
  ? 'vertical menu' : props.horizontal ? 'horizontal menu' : 'menu'}>
    {renderLinks(props.links)}

    <style jsx>{`
        .menu {
          text-transform: uppercase;
          z-index: 1;
          text-decoration: none;
        }

        .vertical {
          display: inline-block;
          margin: 20px 30px;
          transform-origin: left top;
          transform: rotate(270deg) translateX(-100%);
        }

        .horizontal {
          display: inline-block;
          text-align: center;
          position: relative;
        }

        @media(max-width: 1080px) {
          .horizontal { font-size: 0.7em; }
        }

        @media(max-width: 840px) {
          .horizontal { font-size: 1.1em; }
        }

        @media(max-width: 640px) {
          .vertical {
            white-space: nowrap;
            left: 8px;
            top: 10px;
            margin: 0;
            position: absolute;
          }
          .horizontal {
            font-size: 0.8em;
          }
        }
    `}</style>
    <style jsx global>{`
      .link {
        margin: 0 10px 0 0;
        font-size: 140%;
        text-decoration: none;
        color: ${theme.colors.black};
        cursor: pointer;
      }
      .link:hover { text-decoration: line-through; }

      @media(max-width: 640px) {
        .link {
          font-size: 100%;
          display: list-item;
          list-style-type: none;
          width: 100%;
          margin: 5px auto;
        }
      }
    `}</style>
  </div>

Menu.propTypes = propTypes
export default Menu
