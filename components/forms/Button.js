import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../layout/Theme'

const propTypes = {
  type:   PropTypes.string.isRequired,
  value:  PropTypes.string.isRequired
}

const Button = (props) =>
  <div>
    <input type={props.type} value={props.value} />

    <style jsx>{`
        input {
          color: ${theme.colors.white};
          float: left;
          padding: 15px 5px;
          border: 4px solid ${theme.colors.white};
          background: transparent;
          letter-spacing: 0.12em;
          width: 100%;
          font-size: 1.3em;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
          -webkit-transition: all 600ms;
          -moz-transition: all 600ms;
          -o-transition: all 600ms;
          -ms-transition: all 600ms;
          transition: all 600ms;
        }
        input:hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.primary};
        }
    `}</style>
  </div>

Button.propTypes = propTypes
export default Button
