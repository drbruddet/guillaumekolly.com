import React, { PropTypes } from 'react'
import css from 'next/css'

import TimelineItem from '../components/TimelineItem'

const propTypes = {
  items: PropTypes.array.isRequired,
}

const renderTimelineItems = (items) => {
  return items.map( (item, i) => {
    return <TimelineItem key={i} item={item} />
  })
}

const Timeline = (props) =>
  <div>
    <div className={container}>
      <div className={containerBefore} />
      {renderTimelineItems(props.items)}
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

Timeline.propTypes = propTypes
export default Timeline
