/* eslint-disable no-undef */
/* eslint-disable eqeqeq */


import { useState } from 'react';
import './App.css';
import { questions } from './Data/faqQuestions';

function App() {

  const [showans, setShowans] = useState(questions[0].id);
  


  return (
    <div className="App">
      <div>
        <h1 className="font-serif font-semibold text-3xl mt-5">Full Stack Web Development Course</h1>
        <div className='Faqouter'>

          {questions.map((FaqItems, i) => {
            return (

              <div key={i} className="faqItems">
                <h2 onClick={() => setShowans(FaqItems.id)} className="font-serif font-semibold text-xl" >{FaqItems.question}</h2>
                <p className={showans == FaqItems.id ? "showAns" : ""}> {FaqItems.answers} </p>
              </div>
            )
          })}


          

        </div>
      </div>
    </div>








  );
}

export default App;
