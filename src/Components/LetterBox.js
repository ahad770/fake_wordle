import React from 'react'

//style={{backgroundColor: '#6aaa64'}}

function LetterBox(props) {
  return (
    <div className='square' style={{backgroundColor: props.color}}>
      <h1 style={{backgroundColor: props.color}}>{props.letter}</h1>
    </div>
  )
}

export default LetterBox