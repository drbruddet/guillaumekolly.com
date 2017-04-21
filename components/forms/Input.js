import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../layout/Theme'

const propTypes = {
  type:         PropTypes.string.isRequired,
  name:         PropTypes.string.isRequired,
  placeholder:  PropTypes.string
}

const Input = (props) =>
  <div>
    <label htmlFor={props.name} />
    <input
      type={props.type}
      name={props.name}
      className='input'
      placeholder={props.placeholder ? props.placeholder : props.name}
      required
    />
    <span className='animation' />

    <style jsx>{`
        .input {
          font: inherit;
          margin: 0;
          line-height: normal;
          background: none;
          border: none;
          border-bottom: solid 2px ${theme.colors.white};
          font-size: 1em;
          box-shadow: none;
          -moz-box-shadow: none;
          -webkit-box-shadow: none;
          margin: 0 0 1.875em 0;
          padding: 0 0 0.875em 0;
          width: 100%;
        }

        ::-webkit-input-placeholder { color: ${theme.colors.black}; }
        ::-moz-placeholder { color: ${theme.colors.black}; }
        :-ms-input-placeholder { color: ${theme.colors.black}; }
        :-moz-placeholder { color: ${theme.colors.black}; }

        .input:focus { outline: none; padding: 0 0 0.875em 0; }
        .input:focus ~ span { margin-left: -50px; }
        .name { float: right; width: 45%; }
        .email { float: right; width: 45%; margin-right: 10%; }
        .subject { width: 100%; }

        .animation {
          -webkit-transition: all 0.5s linear;
          -moz-transition: all 0.5s linear;
          -ms-transition: all 0.5s linear;
          -o-transition: all 0.5s linear;
          transition: all 0.5s linear;
          content: '';
        }
      `}</style>
  </div>

Input.propTypes = propTypes
export default Input
