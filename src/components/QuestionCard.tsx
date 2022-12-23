import React from 'react'

type Props ={
  question:string;
  answers:string[];
  callback:any;
  userAnswer:any;
  questionNr:number;
  totalQuestions:number;
}

const QuestionCard: React.FC<Props> = ({question,answers,callback,userAnswer,questionNr,totalQuestions}) => {
    return(
      <div>
        <span>Question: {questionNr}/{totalQuestions}</span>
        <p dangerouslySetInnerHTML={{__html:question}} />

        <div className='answers'>
          {answers.map(answer=>(
              <div>
                <button disabled={userAnswer} onClick={callback}>
                  <span dangerouslySetInnerHTML={{__html:answer}}/>
                </button>
              </div>
            ))
          }
        </div>
      </div>
    )
}

export default QuestionCard;
