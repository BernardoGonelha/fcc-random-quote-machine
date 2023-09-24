import { useState } from 'react';
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;

};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor())

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div id="text" style={{color: randomColor, transition}}><h2><FaQuoteLeft size="30" style={{ marginRight: "10px" }}></FaQuoteLeft>{quote.quote}<FaQuoteRight size="30" style={{ marginLeft: "10px" }}></FaQuoteRight></h2></div>
        <div id="author" style={{color: randomColor, transition}}><h4>- {quote.author}</h4></div>
        <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>New Quote</button>
        <a 
          id="tweet-quote" 
          className="button" 
          href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp%text=${quote.quote}"
          target="_top"
          style={{
            backgroundColor: randomColor,
            marginRight: "10px",
            transition
          }}
          >
          <FaTwitter color="white"></FaTwitter>
        </a>
      </div>
    </div>
  )
}

export default App
