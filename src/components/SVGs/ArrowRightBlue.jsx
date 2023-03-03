import { memo } from 'react'

const ArrowRightBlue = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8.828}
      height={14.828}
      viewBox="0 0 8.828 14.828"
      {...props}
    >
      <g data-name="Group 155">
        <g
          data-name="Group 156"
          fill="none"
          stroke="#233962"
          strokeLinecap="round"
          strokeWidth={2}
          transform="rotate(-90 7.414 6)"
        >
          <path data-name="Line 25" transform="translate(6)" d="M6 0L0 6" />
          <path data-name="Line 26" d="M0 0L6 6" />
        </g>
      </g>
    </svg>
  )
}

export default memo(ArrowRightBlue)