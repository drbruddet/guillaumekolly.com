import React, { PropTypes } from 'react'
import css from 'next/css'

const propTypes = {
  item: PropTypes.object.isRequired,
}

const TimelineItem = (props) =>
  <div>
    <div className={css(timelineBlock, timelineBlockRight)}>
      <div className={marker} />
      <div className={timelineContent}>
        <h3 className={title}>{props.item.title}</h3>
        <span className={subtitle}>{props.item.subtitle}</span>
        <p className={description}>{props.item.description}</p>
      </div>
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

const timelineBlockLeft = css({
  float: 'left',
  direction: 'rtl',
  '@media screen and (max-width: 768px)': {
    float: 'none',
    direction: 'ltr',
  }
})

const timelineBlockRight = css({
  float: 'right',
  '@media screen and (max-width: 768px)': {
    float: 'none'
  }
})

const marker = css({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  border: '2px solid #F5F7FA',
  background: '#4FC1E9',
  marginTop: '10px',
  zIndex: '9999'
})

const timelineContent = css({
  width: '95%',
  padding: '0 15px',
  color: '#666'
})

const title = css({
  marginTop: '5px',
  marginBottom: '5px',
  fontSize: '25px',
  fontWeight: '500'
})

const subtitle = css({
  fontSize: '15px',
  color: '#a4a4a4'
})

const description = css({
  fontSize: '14px',
  lineHeight: '1.5em',
  wordSpacing: '1px',
  color: '#888'
})

TimelineItem.propTypes = propTypes
export default TimelineItem
