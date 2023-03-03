import React, { memo } from 'react'

import MainNav from './MainNav/MainNav'
import MainNavMobile from './MainNavMobile/MainNavMobile'

const Header = props => {
  return (
    <header>
      <div className='d-none d-lg-block'>
        <MainNav />
      </div>
      <div className='d-block d-lg-none'>
        <MainNavMobile />
      </div>
    </header>
  )
}

export default memo(Header)
