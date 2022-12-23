import React from 'react';
import QuestionCard from './components/QuestionCard';
import { useState } from "react";
const TOTAL_QUESTIONS = 10;
function App() {
  const [loading,setLoading] = useState(false);
  const [number,setNumber] = useState(0);
  const [questions,setQuestions] = useState([]);
  const [userAnswers,setUserAnswers] = useState([]);
  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(true);
  const startTrivia = async ()=>{

  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>)=>{

  }

  const nextQuestion = ()=>{

  }

  return (
    <div className="App">
      <div className='pg_intro'>
        <h1>Quiz Portal</h1>
        <p>Welcome to the IT quiz for the job round. This quiz is designed to assess your knowledge of computer systems, networks, programming languages, and other technology-related topics. The questions contained within are intended to gauge your understanding of the field and your ability to apply your knowledge in a professional setting. We recommend that you review your course material and relevant concepts before attempting the quiz. Your performance on this quiz will be taken into consideration during the hiring process, so it is important to do your best. Good luck!</p>
        <button className='start' onClick={startTrivia}>Start</button>
      </div>
      <div className='pq_quiz'>
        <QuestionCard 
        questionNr={ number + 1 }
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined  }
        callback={checkAnswer}
        />
        <button className='next' onClick={nextQuestion}>Next</button>
      </div>
    </div>

    
  );
}

export default App;
