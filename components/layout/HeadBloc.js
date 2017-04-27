import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { theme } from './Theme'

const propTypes = {
  title:        PropTypes.string.isRequired,
  description:  PropTypes.string,
  config:       PropTypes.object.isRequired
}

const defaultProps = {
  description: "Guillaume Kolly"
}

const fonts   = "../../" + theme.font.repository

const favicon = (url) => {
  return "../../static/favicon/" + url
}

const HeadBloc = (props) =>
  <Head>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
    <link rel="apple-touch-icon" sizes="180x180" href={favicon("apple-touch-icon.png")} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon("favicon-32x32.png")} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon("favicon-16x16.png")} />
    <link rel="manifest" href={favicon("manifest.json")} />
    <link rel="mask-icon" href={favicon("safari-pinned-tab.svg")} color="#04b3b0" />
    <link rel="shortcut icon" href={favicon("favicon.ico")} />
    <meta name="msapplication-config" content={favicon("browserconfig.xml")} />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={props.description} />
    <meta name="subject" content={props.config.application.subject} />
    <meta name="keywords" content={props.keywords} />
    <meta name="copyright" content={props.config.application.title} />
    <meta name='language' content={props.config.application.lang} />
    <meta name='author' content={props.config.application.owner} />
    <meta name='designer' content={props.config.application.owner} />
    <meta name='owner' content={props.config.application.owner} />
    <meta name='url' content={props.config.application.url} />
    <meta name='identifier-URL' content={props.config.application.url} />
    <meta name='coverage' content='Worldwide' />
    <meta name='distribution' content='Global' />
    <meta name='rating' content='General' />
    <meta name='subtitle' content={props.config.application.subtitle} />
    <meta name='target' content='all' />
    <meta name="apple-mobile-web-app-title" content={props.config.application.title} />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-touch-fullscreen' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='black' />

    <style jsx global>{`
        @font-face {
          font-family: ${theme.font.paragraph};
          src: url(${fonts} + ${theme.font.paragraph_src}) format('truetype');
        }

        @font-face {
          font-family: ${theme.font.title};
          src: url(${fonts} + ${theme.font.title_src}) format('truetype');
        }

        html, body {
          padding: 0;
          margin: 0;
          border: 0;
          line-height: 1.3em;
          font-size: 1em;
          text-shadow: 0;
          font-weight: 400;
          -webkit-font-smoothing: antialiazed;
          -moz-osx-font-smoothing: grayscale;
          font-family: ${theme.font.paragraph_flag};
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
