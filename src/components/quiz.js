import React from 'react';

const Quiz = ({data: {question, correct_answer, answers },questionbar,handleNextQuestion,showAnswers, handleAnswer}) => {

    return (
        <div className="quiz-box">
            <div className="questions-side">
                <h2 className="quiz" dangerouslySetInnerHTML={{__html:question}} />
            </div>
            <div className="question-bar" style={{width: `${questionbar}%`}}></div>
            <div className="answers-side">
                {answers.map((answer, id) => {
                    const bgColor = showAnswers ? answer === correct_answer ? 'correct' : 'incorrect' : 'clear';
                    
                    return(
                        <button key={id} className={`answers-button ${bgColor}`} onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}} />
                    )
                })}
            </div>
            {showAnswers && (
                <button className="next-question-btn" onClick={handleNextQuestion}>
                    Next Question
                </button>
            )} 
        </div>
    )
}

export default Quiz;