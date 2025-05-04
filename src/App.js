import React, { useState, useEffect, useRef } from "react";
import FlashList from "./FlashList";
import './App.css'
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryEl = useRef()
  const amountEl = useRef()

  // FOR CATEGORIES
  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php")
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
  }, [])
  // For Cards
  useEffect(() => {
    // FETCHING API
   
  }, [])


  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.get("https://opentdb.com/api.php",{
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(response => {
      const formattedFlashcards = response.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const options = [...questionItem.incorrect_answers.map(a => decodeString(a))];
        options.splice(Math.floor(Math.random() * (options.length + 1)), 0, answer);
        return {
          id: index,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options
        };
      });

      setFlashcards(formattedFlashcards);
    })
    .catch(err => console.error(err));
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map(category => {
              return <option value={category.id} key={category.id}>{category.name}</option>
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Number Of Questions</label>
          <input type="number" id="amount" min='1' step='1' defaultValue={10} ref={amountEl} />
        </div>

        <div className="form-group">
          <button className="button">Generate</button>
        </div>

      </form>


      <div className="container">
        <FlashList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;

/* const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2",
    answer: "4",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  },
  {
    id: 2,
    question: "What is 2 + 1",
    answer: "5",
    options: [
      "2",
      "3",
      "4",
      "5"
    ]
  }
] */