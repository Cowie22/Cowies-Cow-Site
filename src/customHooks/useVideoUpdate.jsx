import React, { useCallback, useState } from 'react'

const useVideoUpdate = initialState => {
  const [video, handleVideo] = useState(initialState)

  const updateVideo = useCallback((val) => {
    handleVideo(val)
  }, [handleVideo])

  return [video, updateVideo]
}

export default useVideoUpdate
