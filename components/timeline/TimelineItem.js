import React, { PropTypes } from 'react'
import css from 'next/css'

import { theme } from '../layout/Theme'

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object,
}

const TimelineItem = (props) =>
  <div className={css(timelineBlock, props.side)}>
    <div className={css(marker, props.style.marker)} />
    <div className={timelineContent}>
      <h3 className={css(title, props.style.title)}>{props.item.title}</h3>
      <span className={css(subtitle, props.style.subtitle)}>{props.item.subtitle}</span>
      <p className={css(description, props.style.description)}>{props.item.description}</p>
    </div>
  </div>

const timelineBlock = css({
  width: '-webkit-calc(50% + 8px)',
  width: '-moz-calc(50% + 8px)',
  width: 'calc(50% + 8px)',
  display: '-webkit-box',
  display: '-webkit-flex',
  display: '-moz-box',
  display: 'flex',
  WebkitBoxPack: 'justify',
  WebkitJustifyContent: 'space-between',
  MozBoxPack: 'justify',
  justifyContent: 'space-between',
  clear: 'both',
  '@media screen and (max-width: 768px)': {
    marginBottom: '30px',
    width: '100%',
  }
})

const marker = css({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  border: '2px solid #F5F7FA',
  background: '#000',
  marginTop: '10px',
  zIndex: '888'
})

const timelineContent = css({
  width: '95%',
  padding: '0 15px'
})

const title = css({
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '25px',
  fontWeight: '500',
  color: '#000'
})

const subtitle = css({
  fontSize: '15px',
  color: '#000'
})

const description = css({
  fontSize: '14px',
  lineHeight: '1.5em',
  wordSpacing: '1px',
  color: '#000'
})

TimelineItem.propTypes = propTypes
export default TimelineItem
