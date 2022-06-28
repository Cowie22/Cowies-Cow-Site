import React, { memo, useEffect, useRef, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import VideoPlayerData from './VideoPlayerData'

import placeholderImg from '../../assets/images/components/VideoPlayer/video-placeholder.webp'
import placeholderImgFB from '../../assets/images/components/VideoPlayer/video-placeholder.png'

const VideoPlayer = props => {
  const videoRef = useRef()
  const [video, handleVideo] = useState(VideoPlayerData[0].src)

  // useEffect(() => {
  //   videoRef.current ? videoRef.current.load() : undefined
  // }, [video])

  const updateVideo = videoSrc => {
    handleVideo(videoSrc)
  }

  return (
    <div className='video-player-container'>
      <Row>
        <Col lg={{ span: 8, offset: 0 }} className='video-col'>
          <div className='video-container'>
            <iframe
              src={video}
              // width='640'
              // height='360'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
            ></iframe>
            {/* <video
              controls
              poster={placeholderImg || placeholderImgFB}
              preload='none'
              ref={videoRef}
            >
              <source src={video} type='video/mp4'></source>
            </video> */}
          </div>
        </Col>
        <Col lg={{ span: 4, offset: 0 }} className='video-library-col'>
          <div className='video-library-container'>
            <div className='video-library-title-container'>
              <h4 className='text-center extra-bold'>VIDEO SERIES</h4>
            </div>
            <div className='video-selection-container'>
              {VideoPlayerData.map((videoData, i) => {
                const { src, thumbnail, thumbnailFB, alt, text } = videoData
                return (
                  <div
                    className='video-thumbnail-container'
                    key={`${src}-${i}`}
                  >
                    <div
                      className={`thumbnail-container ${
                        src === video ? 'active-thumbnail' : ''
                      }`}
                      onClick={() => updateVideo(src)}
                    >
                      <picture>
                        <source
                          srcSet={thumbnail}
                          alt={alt}
                          type='image/webp'
                        />
                        <source
                          srcSet={thumbnailFB}
                          alt={alt}
                          type='image/png'
                        />
                        <img loading='lazy' src={thumbnailFB} alt={alt} />
                      </picture>
                    </div>
                    <p>{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default memo(VideoPlayer)
