import React from 'react'
import FlashCard from './Flashcard'

export default function FlashList({ flashcards }) {
    return (
        <div className='card-grid'>
            {flashcards.map(flashcard => {
                return <FlashCard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
