import React, { PropTypes } from 'react'
import css from 'next/css'

import TimelineItem from '../components/TimelineItem'

const propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string,
  style: PropTypes.object
}

const renderTimelineItems = (items, type, style) => {
  return items.map( (item, i) => {
    switch (type) {
      case "right":
        return <TimelineItem key={i} item={item} side={timelineBlockRight} style={style} />
        break
      case "left":
        return <TimelineItem key={i} item={item} side={timelineBlockLeft} style={style} />
        break
      default:
        return (i % 2 === 0)
          ? <TimelineItem key={i} item={item} side={timelineBlockRight} style={style} />
          : <TimelineItem key={i} item={item} side={timelineBlockLeft} style={style} />
        break
    }
  })
}

const Timeline = (props) =>
  <div>
    <div className={container}>
      <div className={containerBefore} />
      {renderTimelineItems(props.items, props.type, props.style)}
    </div>
  </div>

const container = css({
  width: '80%',
  padding: '50px 0',
  margin: '50px auto',
  position: 'relative',
  overflow: 'hidden',
})

const containerBefore = css({
  content: '',
  position: 'absolute',
  top: '0',
  left: '50%',
  marginLeft: '-1px',
  width: '2px',
  height: '100%',
  background: '#CCD1D9',
  zIndex: '1',
  '@media screen and (max-width: 768px)': {
    left: '8px',
    width: '2px',
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

Timeline.propTypes = propTypes
export default Timeline
