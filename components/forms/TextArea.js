import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '../layout/Theme'

const propTypes = {
  name:         PropTypes.string.isRequired,
  placeholder:  PropTypes.string,
  cols:         PropTypes.number,
  rows:         PropTypes.number
}

const defaultProps = {
  cols: 30,
  rows: 5
}

const TextArea = (props) =>
  <div>
    <label htmlFor={props.name} />
    <textarea
      className='textarea'
      type="text"
      name={props.name}
      placeholder={props.placeholder ? props.placeholder : props.name}
      cols={props.cols}
      rows={props.rows}
      required
    />
    <span className='animation'/>

    <style jsx> {`
        .textarea {
          font: inherit;
          margin: 0;
          background: none;
          border: none;
          border-bottom: solid 2px ${theme.colors.white};;
          font-size: 1em;
          box-shadow: none;
          -moz-box-shadow: none;
          -webkit-box-shadow: none;
          margin: 0 0 1.875em 0;
          padding: 0 0 0.875em 0;
          width: 100%;
          height: 150px;
          resize: none;
          line-height: '150%',
          overflow: auto;
        }

        ::-webkit-input-placeholder { color: ${theme.colors.black}; }
        ::-moz-placeholder { color: ${theme.colors.black}; }
        :-ms-input-placeholder { color: ${theme.colors.black}; }
        :-moz-placeholder { color: ${theme.colors.black}; }

        .textarea:focus { outline: none; padding: 0 0 0.875em 0; }
        .textarea:focus ~ span { margin-left: -50px; }
        .message { float: none; }

        .animation {
          -webkit-transition: all 0.5s linear;
          -moz-transition: all 0.5s linear;
          -ms-transition: all 0.5s linear;
          -o-transition: all 0.5s linear;
          transition: all 0.5s linear;
          content: '';
        }
      `} </style>
    </div>

  TextArea.propTypes = propTypes
  export default TextArea
