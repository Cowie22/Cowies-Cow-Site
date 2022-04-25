import React, { memo } from 'react'

const CircleAnimation = props => {
  const { image, circleDelayClass } = props
  return (
    <div className={`circle-animation-img-container ${circleDelayClass}`}>
      {image}
    </div>
  )
}

export default memo(CircleAnimation)
