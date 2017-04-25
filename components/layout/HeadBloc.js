import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { theme } from './Theme'

const propTypes = {
  title:        PropTypes.string.isRequired,
  description:  PropTypes.string
}

const defaultProps = {
  description: "Guillaume Kolly"
}

const HeadBloc = (props) =>
  <Head>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />
    <meta name="copyright" content="Guillaume Kolly" />
    <style jsx global>{`
        @import url(${theme.font.import});

        html, body {
          padding: 0;
          margin: 0;
          border: 0;
          line-height: 1.3em;
          font-size: 1em;
          text-shadow: 0;
          -webkit-font-smoothing: antialiazed;
          -moz-osx-font-smoothing: grayscale;
          font-family: ${theme.font.paragraph};
        }

        .tag {
          color: ${theme.colors.black};
          font-weight: 700;
          transition: all 0.4s 0.2s ease-in-out;
          border-radius: 5px;
          padding: 1px 3px;
          background-color: ${theme.colors.trans_primary};
          text-decoration: none;
          cursor: pointer;
          z-index: 999;
        }

        .tag:hover {
          transform: scale(1.05, 1.4);
          transition-delay: 0s;
          transition-duration: 0.2s;
          background-color: ${theme.colors.primary};
        }

        .yellow {
          background-color: ${theme.colors.trans_secondary};
        }

        .yellow:hover {
          background-color: ${theme.colors.secondary};
        }
    `}</style>
  </Head>

HeadBloc.propTypes = propTypes
HeadBloc.defaultProps = defaultProps
export default HeadBloc
