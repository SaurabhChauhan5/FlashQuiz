import React, { useState, useRef } from 'react'

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  const frontEl = useRef()
  const backEl = useRef()

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={{ height: '100%' }}
      onClick={() => setFlip(!flip)}>

      <div className='front' ref={frontEl}>
        {flashcard.question}

        <div className='flashcard-options'>
          {flashcard.options.map((option, index) => (
            <div key={index}>{option}</div>
          ))}
        </div>
      </div>

      <div className='back' ref={backEl}>
        {flip ? flashcard.answer : flashcard.question}
      </div>
    </div>
  )
}
