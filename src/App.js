import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { backgroundColors } from './backgrounds';

function App() {
  const [currentQoute,setCurrentQoute] = useState({qoute:'The question isn’t who is going to let me; it’s who is going to stop me.',author:'Ayn Rand'})
  const [mainColor,setMainColor] = useState('#282c34');

  
  const newQoute= () => {
    setMainColor(backgroundColors[Math.floor((backgroundColors.length * Math.random()))])

     axios.get('https://api.quotable.io/random')
    .then( function(response) {
      setCurrentQoute({qoute:response.data.content, author:response.data.author})
    })
    .catch( function(error){
      console.log(error)
    })
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:mainColor}}>
        <div id="quote-box" style={{color:mainColor}}>
          <p id='text'>"{currentQoute.qoute}"</p>
          <p id='author'>- {currentQoute.author}</p>
          <a className='fa-brands fa-twitter' id='tweet-quote' href={encodeURI(`http://www.twitter.com/intent/tweet?text=${currentQoute.qoute} -${currentQoute.author} #qoutes`)}
              style={{backgroundColor:mainColor}}></a>
          <button id="new-quote" onClick={()=> newQoute()} style={{backgroundColor:mainColor}}> New Quote </button>
        </div>  
      </header>
    </div>
  );
}

export default App;
