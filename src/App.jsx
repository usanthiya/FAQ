import { useState } from 'react'

import './App.css'
const FaqItem=({question,answer})=>{
  const [show,setshow]=useState(false);

  const toggleshow=()=>{
    setshow(!show);
  }
  return(
    <div className={`faq-item ${show ? "active":""}`}>
      <div className='faq-items-header' onClick={toggleshow}>{question}</div>
      <div className='faq-items-body'> 
        <div className="faq-item-body-content">{answer}</div>
      </div>
    </div>
  )
}

const FaqAccordion=({data})=>{
  return(
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item)=>(
        <FaqItem  key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>
  )
}
const data=[{id:1,question:"What is react?",
         answer:"React is a front-end Javascript Library for building user interfaces or UI Components"},
         {id:2,question:"What are the benefits of React",answer:"Some of the benefits of React are: it is fast, scalable, modular,easy to debugger, and supports servide side rendering."},
         {id:3,question:"What are the main concepts of React?",answer:"Some of the main concepts of React are: Components, props, state, hoooks, lifestyle methods and JSX."},

];
function App() {
return (
    <>
      <FaqAccordion data={data}/>
    </>
  )
}

export default App
