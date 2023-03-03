import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useReducer,
} from 'react'

// This is the main function that allows contexts to work and is built in to react.
// AppContext will have AppContext.Provider, which is used here and will also have
// AppContext.Consumer, which allows the global state to be used throughout the app.
// Hence why AppContext is exported as well as the class component below.

const AppContext = createContext()

const AppWrapper = ({ children }) => {
  const [currentPage, handleCurrentPage] = useState('')
  const [isExitRampOpen, handleIsExitRampOpen] = useState(false)
  const [externalUrl, handleExternalUrl] = useState('')
  const [slider, handleSlider] = useState('')
  const [references, handleReferences] = useState('')


  // Handle the current page of the site
  const updateCurrentPage = useCallback(
    (val) => {
      handleCurrentPage(val)
    },
    [handleCurrentPage]
  )

  const updateIsExitRampOpen = (url) => {
    handleIsExitRampOpen(!isExitRampOpen)
    handleBodyScroll(!isExitRampOpen)
    handleExternalUrl(url)
  }

  const updateSlider = useCallback(
    (val) => {
      handleSlider(val)
    },
    [handleSlider]
  )

  const updateReferences = useCallback(
    (val) => {
      handleReferences(val)
    },
    [handleReferences]
  )

  // Function that when called with true, will stop the user from being able to
  // Scroll and visa versa
  const handleBodyScroll = (val) => {
    if (typeof document !== 'undefined') {
      let body = document.getElementsByTagName('body')[0]
      if (val === true) {
        body.classList.add('scroll-none')
      } else {
        body.classList.remove('scroll-none')
      }
    }
  }

  let sharedState = {
    currentPage,
    updateCurrentPage,
    isExitRampOpen,
    externalUrl,
    updateIsExitRampOpen,
    slider,
    updateSlider,
    references,
    updateReferences,
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )

}

export { AppContext, AppWrapper }