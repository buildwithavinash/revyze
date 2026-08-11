import { Link, useLocation } from 'react-router';
import { getQuizFeedback } from '../services/quizService';
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

  const {quiz, results, answers} = state;
  const feedback = getQuizFeedback(results.accuracy, results.completion);
  return (
    <div className='flex justify-center items-center min-h-screen'>
      

     <div className='border border-border rounded-lg p-4'>
      {/* quiz header */}
      <div className='flex flex-col items-center'>
        <h3 className='text-xl font-semibold'>
          Quiz Completed!
        </h3>
        <p className=''>{quiz.title}</p>
      </div>

      {/* quiz results */}
      <div className='border border-border rounded-md p-2 flex flex-col gap-0.5 items-center mt-4'>
        <p>{results.correct} / {results.attempted} (Total Questions: {results.totalQuestions})</p>
      </div>

      {/* meta stats */}
      <div className='flex justify-between items-center gap-2 mt-4'>
        <div className='border border-border flex-1 rounded-md p-1 flex flex-col items-center justify-center'>
          <p className='text-lg'>{results.accuracy}%</p>
          <h3 className='text-sm'>Accuracy</h3>
        </div>

        <div className='border border-border flex-1 rounded-md p-1 flex flex-col items-center justify-center'>
          <p className='text-lg'>{results.completion}%</p>
          <h3 className='text-sm'>Completion</h3>
        </div>
      </div>

      {/* stats */}
      <div className='flex justify-between items-center gap-2 mt-4'>
        <div className='border border-border rounded-md flex flex-col flex-1 items-center justify-center p-1'>
          <p className='text-lg'>{results.correct}</p>
          <h3 className='text-sm'>Correct</h3>
        </div>

        <div className='border border-border rounded-md p-1 flex flex-col flex-1 items-center justify-center'>
          <p className='text-lg'>{results.wrong}</p>
          <h3 className='text-sm'>Wrong</h3>
        </div>

        <div className='border border-border p-1 rounded-md flex flex-col flex-1 items-center justify-center'>
          <p className='text-lg'>{results.skipped}</p>
          <h3 className='text-sm'>Skipped</h3>
        </div>
      </div>

      {/* long feedback */}
      <div className='border border-border rounded-md flex flex-col items-center justify-center mt-4'>
        <p className=''>{feedback.title}</p>
        <p>{feedback.message}</p>
      </div>

      {/* actions */}
      <div className='flex justify-between gap-2 mt-4'>
        <Link to={`quiz/${quiz.slug}/review`} state={{answers}} className='border border-border rounded-md px-2 py-1'>Review Answers</Link>
        <button className='border border-border rounded-md px-2 py-1'>Retry Quiz</button>
        <button className='border border-border rounded-md px-2 py-1'>Back to Category</button>
      </div>
     </div>
    
    </div>
  )
}

export default ResultsPage