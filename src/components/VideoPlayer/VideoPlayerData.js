import React from 'react'

import thumbnail_1 from '../../assets/images/components/VideoPlayer/thumbnail-1.webp'
import thumbnail_1_FB from '../../assets/images/components/VideoPlayer/thumbnail-1.png'
import thumbnail_2 from '../../assets/images/components/VideoPlayer/thumbnail-2.webp'
import thumbnail_2_FB from '../../assets/images/components/VideoPlayer/thumbnail-2.png'
import thumbnail_3 from '../../assets/images/components/VideoPlayer/thumbnail-3.webp'
import thumbnail_3_FB from '../../assets/images/components/VideoPlayer/thumbnail-3.png'


const VideoPlayerData = [
  {
    src: 'https://player.vimeo.com/video/724730019?h=667e6e2997&autoplay=1&cc_load_policy=1',
    thumbnail: thumbnail_1,
    thumbnailFB: thumbnail_1_FB,
    alt: 'Thumbnail image of Dr. Rosenberg: Definition, incidence, and risk factors',
    text: 'Definition, incidence, and risk factors',
    startingSRC: 'https://player.vimeo.com/video/724730019?h=667e6e2997',
  },
  {
    src: 'https://player.vimeo.com/video/724761160?h=9d7614b4c4&autoplay=1&cc_load_policy=1',
    thumbnail: thumbnail_2,
    thumbnailFB: thumbnail_2_FB,
    alt: 'Thumbnail image of Dr. Rosenberg: Classification and clinical presentation',
    text: 'Classification and clinical presentation',
  },
  {
    src: 'https://player.vimeo.com/video/724765080?h=c2cdaa8cbc&autoplay=1&cc_load_policy=1',
    thumbnail: thumbnail_3,
    thumbnailFB: thumbnail_3_FB,
    alt: 'Thumbnail image of Dr. Rosenberg: A distinct cancer',
    text: 'A distinct cancer',
  },
]

export default VideoPlayerData