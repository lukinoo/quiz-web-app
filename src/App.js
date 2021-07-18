import React, { useState,useEffect } from 'react';
import './App.css';
import Quiz from './components/quiz';
import Results from './components/result';

// const API_URL_MUSIC = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy';
const API_URL_COMPUTERS = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy';

function App() {

  const [questions,setQuestions] = useState([]);
  const [currentIndex,setCurrentIndex] = useState(0);
  const [score,setScore] = useState(0);
  const [showAnswers,setShowAnswers] = useState(false);
  const [questionbar,setQuestionBar] = useState(0);

  useEffect(() => {
    fetch(API_URL_COMPUTERS)
      .then(res => res.json())
      .then(data => {
        const questions = data.results.map(question => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers
          ].sort(() => Math.random() - 0.5)
        }));
        setQuestions(questions);
      })
  },[]);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
    
    setQuestionBar(questionbar+10)
  }

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <Results score={score}/>
      ) : (
        <Quiz data={questions[currentIndex]} handleAnswer={handleAnswer} showAnswers={showAnswers} handleNextQuestion={handleNextQuestion}  questionbar={questionbar}/>
      )}
    </div>
  ) : (
    <h2>Loading...</h2>
  )
}

export default App;
