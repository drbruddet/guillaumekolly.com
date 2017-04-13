import React, { PropTypes } from 'react'
import css from 'next/css'

import TimelineItem from './TimelineItem'
import { theme } from '../layout/Theme'

const propTypes = {
  items: PropTypes.array.isRequired,
  type: PropTypes.string,
  style: PropTypes.object
}

const defaultProps = {
  type: "",
  style: null
}

const renderTimelineItems = (items, type, style) => {
  return items.map( (item, i) => {
    switch (type) {
      case "right":
        return (
          <TimelineItem
            key={i}
            item={item}
            side={timelineBlockRight}
            style={style}
          />
        )
        break
      case "left":
        return (
          <TimelineItem
            key={i}
            item={item}
            side={timelineBlockLeft}
            style={style} />
        )
        break
      default:
        return (i % 2 === 0) ? (
          <TimelineItem
            key={i}
            item={item}
            side={timelineBlockRight}
            style={style} />
        ) : (
          <TimelineItem
            key={i}
            item={item}
            side={timelineBlockLeft}
            style={style} />
        )
        break
    }
  })
}

const Timeline = (props) =>
  <div>
    <div className={css(container, props.style.container)}>
      <div className={css(containerBefore, props.style.containerBefore)} />
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
  background: '#000',
  zIndex: '1',
  '@media screen and (max-width: 768px)': { left: '8px', width: '2px' }
})

const timelineBlockLeft = css({
  float: 'left',
  direction: 'rtl',
  '@media screen and (max-width: 768px)': { float: 'none', direction: 'ltr' }
})

const timelineBlockRight = css({
  float: 'right',
  '@media screen and (max-width: 768px)': { float: 'none' }
})

Timeline.propTypes = propTypes
Timeline.defaultProps = defaultProps
export default Timeline
