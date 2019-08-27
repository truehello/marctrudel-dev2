import React from "react"
import PropTypes from "prop-types"

import { SmartLink } from "./smart-link.component"

export const CallToAction = ({ url, children, align, bgColor, ...other }) => {
  
  const link = (
    <SmartLink to={url} className="btn btn-primary" {...other}>
      {children}
    </SmartLink>
  )

  return align === "center" ? (
    <span style={{ display: "flex", justifyContent: "center" }}>{link}</span>
  ) : (
    link
  )
}

CallToAction.propTypes = {
  url: PropTypes.string.isRequired,
  align: PropTypes.string,
}
