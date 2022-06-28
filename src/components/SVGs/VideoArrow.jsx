import React, { memo } from 'react'

const VideoArrow = props => {
  const { isHovered } = props

  return (
    <svg
      width={40}
      height={28}
      viewBox='0 0 40 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke={isHovered ? '#997F8A' : '#E3FF39'}
        strokeWidth={0.898765}
        d='M0.449383 0.449383H39.550582999999996V27.550583H0.449383z'
      />
      <path d='M28 13.712l-13.067 7.544V6.168L28 13.712z' fill={isHovered ? '#997F8A' : '#E3FF39'} />
    </svg>
  )
}

export default memo(VideoArrow)
