import React, { useRef, memo } from 'react'
import { Row, Col } from 'react-bootstrap'

import video from '../../assets/videos/test.mp4'
import VideoPlayerData from './VideoPlayerData'


const VideoPlayer = (props) => {
  return (
    <div className='video-player-container'>
      <Row>
        <Col lg={{span: 8, offset: 0}} className='video-col'>
          <div className='video-container'>
            <video
              controls
            >
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </Col>
        <Col lg={{span: 4, offset: 0}} className='video-library-col'>
          <div className='video-library-container'>
            <div className='video-library-title-container'>
              <h4 className='text-center extra-bold'>
                VIDEO SERIES
              </h4>
            </div>
            <div className='video-selection-container'>
              {
                VideoPlayerData.map((video, i) => {
                  const { src, thumbnail, thumbnailFB, alt, text } = video
                  return (
                    <div
                      className='video-thumbnail-container'
                      key={`${src}-${i}`}
                    >
                      <div className='thumbnail-container'>
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
                          <img
                            loading='lazy'
                            src={thumbnailFB}
                            alt={alt}
                          />
                        </picture>
                      </div>
                      <p>
                        {text}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default memo(VideoPlayer)