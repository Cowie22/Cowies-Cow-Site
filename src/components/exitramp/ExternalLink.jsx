import React, { useContext } from "react"
import PropTypes from "prop-types"
import { AppContext } from "../../contexts/state"

const ExternalLink = ({ children, externalUrl, className, id }) => {
  const state = useContext(AppContext)
  return (
    <a
      href={externalUrl}
      id={id}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault()
        state.handleIsExitRampOpen(externalUrl)
      }}
    >
      {children}
    </a>
  )
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  externalUrl: PropTypes.string.isRequired,
}

export default ExternalLink
