const Results = ({score}) => {
    const restart = () => {
        window.location = `App.js`;
    }
    
    return (
            <div className="result">
                <h2 className="result-score">🔥 Your score is: {score} 🔥</h2>
                <button className="retry-btn" onClick={restart}>Try again</button>
            </div>
    )
}

export default Results;