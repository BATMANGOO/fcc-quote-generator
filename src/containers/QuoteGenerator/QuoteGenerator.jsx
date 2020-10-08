import React from 'react';
import './QuoteGenerator.css';

const body = document.getElementById('root');


const QuoteGenerator = props => {
  // Helper function to call twitter share.
  const shareQuote = event => {
    event.preventDefault();
    window.open(`${"https://twitter.com/intent/tweet?text="} "${props.selectedQuote.quote}" -${props.selectedQuote.author}`);
  }
  //styles
  body.style.backgroundColor = props.pallet[props.colorIdx];
  body.style.transition = '1.5s ease';

  return (
    <div id="quote-box">
      <div id="quote-container">
        <div id='text' className='quote' style={{'color': props.pallet[props.colorIdx], 'transition' : '1.5s ease'}}>{props.selectedQuote.quote}</div>
        <div id="author" className='author' style={{'color': props.pallet[props.colorIdx], 'transition': '1.5s ease'}}>- {props.selectedQuote.author}</div>
      </div>
      <div id='buttons'>
        <a  className='tweet' id='tweet-quote' href="twitter.com/intent/tweet" title="tweet this quote!" ><button style={{'backgroundColor': props.pallet[props.colorIdx], 'transition': '1.5s ease'}} id='tweet-button' onClick={shareQuote} className='button tweet-button'>Tweet</button></a>
      <button type="button" id="new-quote" style={{'backgroundColor': props.pallet[props.colorIdx], 'transition': '1.5s ease'}} className="button new-quote" onClick={props.assignNewQuoteIndex}>New Quote</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;