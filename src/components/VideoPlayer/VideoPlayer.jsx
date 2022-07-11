import React, { memo } from 'react'
import { Row, Col } from 'react-bootstrap'

import VideoPlayerData from './VideoPlayerData'
import useVideoUpdate from '../../customHooks/useVideoUpdate'

const VideoPlayer = props => {
  const [video, updateVideo] = useVideoUpdate(VideoPlayerData[0].startingSRC)

  return (
    <div className='video-player-container'>
      <Row>
        <Col lg={{ span: 8, offset: 0 }} className='video-col'>
          <div className='video-container'>
            <iframe
              src={video}
              frameBorder='0'
              allow='fullscreen; picture-in-picture; autoplay'
              title={video}
            ></iframe>
          </div>
        </Col>
        <Col lg={{ span: 4, offset: 0 }} className='video-library-col'>
          <div className='video-library-container'>
            <div className='video-library-title-container'>
              <h4 className='text-center extra-bold'>VIDEO SERIES</h4>
            </div>
            <div className='video-selection-container'>
              {VideoPlayerData.map((videoData, i) => {
                const { src, thumbnail, thumbnailFB, alt, text, startingSRC } = videoData
                return (
                  <div
                    className='video-thumbnail-container'
                    key={`${src}-${i}`}
                  >
                    <div
                      className={`thumbnail-container ${
                        src === video ? 'active-thumbnail' : startingSRC === video ? 'active-thumbnail' : ''
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
