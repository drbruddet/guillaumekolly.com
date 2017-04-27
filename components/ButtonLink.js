import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { theme } from '../components/layout/Theme'

const propTypes = {
  url:    PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  blank:  PropTypes.bool,
  alt:    PropTypes.string
}

const defaultProps = {
  alt:    "",
  black:  false
}

const ButtonLink = (props) =>
  <div className={props.table ? "buttonlink fixed" : "buttonlink"}>
    <Link prefetch href={props.url}>
      <a target={"_blank" ? props.blank : ""} alt={props.alt}>{props.title}</a>
    </Link>

    <style jsx>{`
        .buttonlink {
          font-size: 1.1em;
          letter-spacing: -0.04em;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          background-color: ${theme.colors.white};
          margin: 10px auto;
          width: 100%;
          cursor: pointer;
          -webkit-transition: all 600ms;
          -moz-transition: all 600ms;
          -o-transition: all 600ms;
          -ms-transition: all 600ms;
          transition: all 600ms;
        }

        .buttonlink:hover {
          color: white;
          background-color: ${theme.colors.primary};
        }

        .buttonlink > a {
          color: ${theme.colors.black};
          border: 4px solid ${theme.colors.primary};
          display: block;
          padding: 10px;
          box-sizing: border-box;
          text-decoration: none;
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 640px) {
          .buttonlink {
            width: 80%;
            font-size: 1em;
            padding: 0;
            line-height: 0.8em;
          }
          .fixed { display: table-cell; vertical-align: middle; width: 45%; }
        }
    `}</style>
  </div>

ButtonLink.propTypes = propTypes
ButtonLink.defaultProps = defaultProps
export default ButtonLink
