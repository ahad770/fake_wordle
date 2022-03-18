import React from 'react'

function LetterBox(props) {
  return (
    <div className='square'>
      <h1>{props.letter}</h1>
    </div>
  )
}

export default LetterBox