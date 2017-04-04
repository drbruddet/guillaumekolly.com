import React, { PropTypes } from 'react'
import css from 'next/css'

const propTypes = {
  name:         PropTypes.string.isRequired,
  placeholder:  PropTypes.string,
  style:        PropTypes.object,
  cols:         PropTypes.number,
  raws:         PropTypes.number
}

const TextArea = (props) =>
  <div className={props.style}>
    <label htmlFor={props.name}></label>
    <textarea className={textarea}
              type="text"
              name={props.name}
              placeholder={props.placeholder ? props.placeholder : props.name}
              cols={props.cols ? props.cols : 30}
              rows={props.rows ? props.rows : 5}
              required>
    </textarea>
    <span className={animation}/>
  </div>

const textarea = css({
  font: 'inherit',
  margin: '0',
  lineHeight: 'normal',
  background: 'none',
  border: 'none',
  borderBottom: 'solid 2px #fff',
  fontSize: '1em',
  margin: '0em 0 1.875em 0',
  padding: '0 0 0.875em 0',
  width: '100%',
  WebkitBoxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  MsBoxSizing: 'border-box',
  OBoxSizing: 'border-box',
  boxSizing: 'border-box',
  WebkitTransition: 'all 0.3s',
  MozTransition: 'all 0.3s',
  MsTransition: 'all 0.3s',
  OTransition: 'all 0.3s',
  transition: 'all 0.3s',
  height: '150px',
  resize: 'none',
  width: '100%',
  lineHeight: '150%',
  overflow: 'auto',
  ':focus': {
    outline: 'none',
    padding: '0 0 0.875em 0',
  },
  ':focus ~ span': {
    marginLeft: '-50px'
  }
})

const animation = css({
  WebkitTransition: 'all 0.5s linear',
  MozTransition: 'all 0.5s linear',
  MsTransition: 'all 0.5s linear',
  OTransition: 'all 0.5s linear',
  transition: 'all 0.5s linear',
  content: '',
})

TextArea.propTypes = propTypes
export default TextArea
