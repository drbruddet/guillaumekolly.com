import React from 'react'
import PropTypes from 'prop-types'
import { Parallax, Background } from 'react-parallax'

import { theme } from '../components/layout/Theme'

const propTypes = {
  title:      PropTypes.string.isRequired,
  background: PropTypes.object.isRequired,
  strength:   PropTypes.number
}

const defaultProps = {
  strength: 600
}

const ParallaxBlock = (props) =>
  <div>
    <Parallax strength={props.strength}>
      <Background> {props.background} </Background>
      <div className="parallax">
        <h2 className="title"> {props.title} </h2>
      </div>
    </Parallax>
    <div className="content"> {props.children} </div>

    <style jsx>{`
        .parallax {
          height: 200px;
          border-top: 1px solid ${theme.colors.almost_white};
        }

        .title {
          text-align: center;
          font-family: ${theme.font.title_flag};
          text-transform: uppercase;
          font-size: 2.3em;
          line-height: 2.5em;
          color: ${theme.colors.black};
          padding-top: 30px;
        }

        @media(max-width: 640px) {
          .parallax { height: 100px; }
          .title { font-size: 1.3em; line-height: 1.5em; }
        }

        .content {
           margin: 5% auto;
         }
    `}</style>
  </div>

ParallaxBlock.propTypes = propTypes
ParallaxBlock.defaultProps = defaultProps
export default ParallaxBlock
