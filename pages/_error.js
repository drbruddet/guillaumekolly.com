import React from 'react'

import { theme } from '../components/layout/Theme'
import HeadBloc from '../components/layout/HeadBloc'
import FullBackground from '../components/FullBackground'
import ButtonLink from '../components/ButtonLink'

import config from '../data/config'

export default class Error extends React.Component {

  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : (jsonPageRes ? jsonPageRes.status : null)
    return {
      statusCode,
      config: config
    }
  }

  renderError() {
    return this.props.statusCode
      ? ` An error occurred on server.`
      : ' An error occurred on client.'
  }

  render () {
    const meta = this.props.config.meta.error
    const title = `${meta.title} ${this.props.statusCode} Page not found`
    const movingtextstringify = String(this.props.statusCode)

    return (
      <div className="centeredbox">
        <HeadBloc
          title={title}
          description={meta.description}
          keywords={meta.keywords}
          config={this.props.config}
        />
        <FullBackground />
        <div className="verticalycentered">
          <h2 className="errortext">
            The page your looking for can't be found.<br/>
            {this.renderError()}
          </h2>
          <div className="statuscode">{movingtextstringify}</div>
          <div className="buttonlink">
            <ButtonLink url="/" title="Home" alt="Home Page" />
            <ButtonLink url="/resume" title="Resume" alt="Resume Page" />
            <ButtonLink url="/contact" title="Contact" alt="Contact Page" />
          </div>
        </div>

        <style jsx>{`
            .centeredbox {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100vw;
              height: 100vh;
            }

            .verticalycentered {
              text-align: center;
              z-index: 1;
              background: transparent;
              color: ${theme.colors.black};
            }

            .statuscode {
              font-size: 20em;
              line-height: 1em;
              max-width: 480px;
            }

            .buttonlink {
              width: 100%;
              max-width: 480px;
              margin: auto;
            }

            .errortext {
              font-size: 140%;
              width: 100%;
              margin: 0 auto;
              line-height: 130%;
              color: ${theme.colors.light_text};
            }

            @media(max-width: 640px) {
              .errortext { font-size: 100%; }
              .statuscode { font-size: 5em; }
              .verticalycentered { width: 100%; margin-top: 30px; }
              .buttonlink { width: 90%; }
            }
        `}</style>
      </div>
    )
  }
}
