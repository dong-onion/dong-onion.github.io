import React from 'react'

const ScreenHeader = ({ content }) => {
  return (
    <div style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 7 }}>
      {content}
    </div>
  )
}

export default ScreenHeader
