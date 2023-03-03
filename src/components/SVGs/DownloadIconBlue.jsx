import { memo } from 'react'

const DownloadIconBlue = (props) => {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.297.227H6.772A.292.292 0 006.48.52v1.17c0 .16.13.292.292.292h1.822L4.792 5.649a.292.292 0 000 .417l.827.828a.292.292 0 00.41 0l3.807-3.67v1.754c0 .162.13.293.292.293h1.17c.162 0 .293-.131.293-.293V.52a.293.293 0 00-.294-.293z"
        fill="#233962"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3 6.808h-1.17a.284.284 0 00-.293.276v2.953H1.782V1.976h2.951a.284.284 0 00.277-.292V.514A.284.284 0 004.733.22H.313a.263.263 0 00-.185.076L.12.305.112.313a.263.263 0 00-.076.185v11.011a.27.27 0 00.076.184l.007.01h.01c.048.048.114.075.184.075h11a.27.27 0 00.186-.073l.01-.009a.268.268 0 00.074-.184V7.084a.284.284 0 00-.284-.276z"
        fill="#233962"
      />
    </svg>
  )
}

export default memo(DownloadIconBlue)