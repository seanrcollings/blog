import React, { useState } from 'react'

export default function ErrorBox(props) {
  const [className, setClassName] = useState('')

  if (props.render) {
    return (
      <div className={`error-box ${className}`}>
        <span className='error-box-text'>Something went wrong:</span> <span className='error-box-error' title={props.error}>{props.error}</span>
        <div className='error-box-close' onClick={() => setClassName('error-box-hide')}>X</div> 
      </div>  
    )
  } else { return null }
}
