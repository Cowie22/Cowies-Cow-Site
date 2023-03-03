import { memo } from 'react'

const CloseIconBlue = (props) => {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.5 20C.5 9.23 9.23.5 20 .5S39.5 9.23 39.5 20 30.77 39.5 20 39.5.5 30.77.5 20z"
        stroke="#233962"
      />
      <path
        clipRule="evenodd"
        d="M11.5 11.5l17 17-17-17zM28.5 11.5l-17 17 17-17z"
        stroke="#233962"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default memo(CloseIconBlue)