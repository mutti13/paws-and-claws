import React from 'react'
import {Alert} from 'react-bootstrap'

function Message({variant, children}) {
  return (
    <Alert style={{
      fontSize:"15px"
    }} variant={variant}>
        {children}
    </Alert>
  )
}

export default Message
