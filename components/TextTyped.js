import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'

import { theme } from './layout/Theme'

const propTypes = {
  children:       PropTypes.array.isRequired,
  avgTypingDelay: PropTypes.number,
  stdTypingDelay: PropTypes.number,
  startDelay:     PropTypes.number,
  hideWhenDone:   PropTypes.bool
}

const defaultProps = {
  avgTypingDelay: 30,
  stdTypingDelay: 20,
  startDelay:     500,
  hideWhenDone:   true,
}

const TextTyped = (props) =>
  <div className="texttyped">
    <Typist
      avgTypingDelay={props.avgTypingDelay}
      stdTypingDelay={props.stdTypingDelay}
      startDelay={props.startDelay}
      cursor={{hideWhenDone: props.hideWhenDone}}
    >
      {props.children}
    </Typist>

    <style jsx>{`
        .texttyped {
          position: absolute;
          width: 598px;
          right: 10%;
          font-size: 1.1em;
          line-height: 1.5em;
          letter-spacing: -0.3px;
          text-align: justify;
          text-justify: inner-word;
          top: calc(30% + 7.2em);
          color: ${theme.colors.black};
        }

        @media screen and (max-width: 1240px) {
          .texttyped {
            font-size: 1em;
            width: 467px;
            top: calc(30% + 4em + 4em);
          }
        }

        @media screen and (max-width: 640px) {
          .texttyped {
            width: 335px;
            top: calc(30% + 2.3em);
            right: 9%;
            margin-bottom: 20px;
          }
        }

        @media screen and (max-width: 440px) {
          .texttyped {
            min-width: 240px;
            width: calc(80%);
            top: calc(10% + 2.5em);
            right: 5%;
            font-size: 0.8em;
          }
        }
    `}</style>
  </div>

TextTyped.propTypes = propTypes
TextTyped.defaultProps = defaultProps
export default TextTyped
