import React, { useState,useEffect } from 'react'
import useAxios from '../api/useAxios'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';
import { useDispatch } from 'react-redux';
import { setScoreNow } from '../Redux/ScoreSlice';


const getRandom = (max) =>{
    return Math.floor(Math.random() * Math.floor(max));
}

const QuizPage = () => {
    const { response,error,loading} =useAxios()
    const dispatch =useDispatch()
    
    console.log(error);
    const navigate = useNavigate()
    const [questions,setQuestions] =useState([])
    const [questionIndex,setQuestionIndex] =useState(0)
    const [options,setOptions] = useState([])
    console.log(response);
    useEffect(() => {
        if (response?.results?.length) {
            const question = response?.results[questionIndex]
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandom(question.incorrect_answers.length),
                0,
                question.correct_answer
            )
            setOptions(answers)
          
        }
      }, [response,questionIndex]);

      const handleOptionClick = (e)=>{
        const question = response?.results[questionIndex]
        if(e.target.textContent === question.correct_answer){
            dispatch(setScoreNow())
        }
        
        
        if(questionIndex+1 < response?.results?.length){
            setQuestionIndex(questionIndex+1)
        }else{
          
            navigate('/final')
        }
      }
      if(loading){
        return (
            <div className='container-fluid d-flex justify-content-center align-items-end'>
<p>loading</p>
                
            </div>
        )
      }
  return (
    <div className="container" style={{background:'transparent'}}>
    <div className="row" >
        <div className="col text-center" >
            <h1  style={{marginTop:'20%'}}>Question :{questionIndex+1}</h1>
            <p>{response?.results[questionIndex]?.question}</p>
            {options.map((data,index)=>(
                <div className='d-grid gap-4 py-2'>

                    <Button onClick={handleOptionClick} size='lg' key={index} >{data}</Button>
                </div>
            ))}
            <p>{questionIndex}/{response?.results?.length}</p>
        </div>
    </div>
</div>
  )
}

export default QuizPage