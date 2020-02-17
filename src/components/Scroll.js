import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '4px solid #fff', height: '800px'}}>
      {props.children}
    </div>
  )
}

export default Scroll