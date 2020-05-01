import React from "react"
import PropTypes from "prop-types"
import { AppContext } from "../../contexts/state"

const ExternalLink = ({ children, externalUrl, className, id }) => {
  return (
    <AppContext.Consumer>
      {context => {
        const { handleIsExitRampOpen } = context
        return (
          <a
            href={externalUrl}
            id={id}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => {
              e.preventDefault()
              handleIsExitRampOpen(externalUrl)
            }}
          >
            {children}
          </a>
        )
      }}
    </AppContext.Consumer>
  )
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  externalUrl: PropTypes.string.isRequired,
}

export default ExternalLink
