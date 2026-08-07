import { Link, useLocation } from 'react-router';
const ResultsPage = () => {
  const {state} = useLocation();

  if(!state){
    return (
      <div>
        <h1>No results found</h1>

        <Link to='/'>Back Home</Link>
      </div>
    )
  }

  const {quiz, results} = state;
  return (
    <div>
      

      <h1>{quiz.title}</h1>

      <h2>
        {results.correct} / {results.totalQuestions}
      </h2>

      <p>Accuracy: {results.accuracy}%</p>

      <p>Completion: {results.completion}%</p>

      <p>Correct: {results.correct}</p>

      <p>Wrong: {results.wrong}</p>

      <p>Skipped: {results.skipped}</p>

    
    </div>
  )
}

export default ResultsPage