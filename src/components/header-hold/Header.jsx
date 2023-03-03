import React, { memo } from 'react'

import MainNav from './MainNav'

const Header = props => {
  return (
    <header>
      <MainNav />
    </header>
  )
}

export default memo(Header)
