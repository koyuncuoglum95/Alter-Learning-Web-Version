import React from 'react'
import Share from '../Share/Share'

const MainShare = () => {
  return (
    <div>
        <div style={{ border: 'none'}}>
            <Share
            label="Share"
            title="My Web Share Adventures"
            text="Hello World! I shared this content via Web Share"
         
            />
        </div>
    </div>
  )
}

export default MainShare