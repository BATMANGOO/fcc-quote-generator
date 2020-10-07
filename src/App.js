import React from "react";
import "./App.css";
import ReactFCCtest from "react-fcctest";
import QuoteGenerator from './containers/QuoteGenerator/QuoteGenerator';

const API = 'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      index: Math.floor(Math.random() * 100),
      colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ],
      color: null
    }
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  async componentDidMount() {
    try {
      await fetch(API)
        .then(res => res.json())
        .then(quotes => this.setState({ quotes: quotes }))
    } catch(e) {
      console.log(e);
    } 
  }

  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.index)){
      return [];
    } else {
      return this.state.quotes[this.state.index];
    }
  }

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return console.log("array is empty or don't exist");
    }
    return Math.floor(Math.random() * this.state.quotes.length);
  }

  assignNewQuoteIndex() {
    this.setState({ index: this.generateNewQuoteIndex(), color: Math.floor(Math.random() * this.state.colors.length) });
  }
  render() {
    const pallet = this.state.colors;
    const colorIdx = this.state.color;
    
    return (
      <div className="App">
        <ReactFCCtest />
        <QuoteGenerator colorIdx={colorIdx} pallet={pallet} selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
      </div>
    );
  }
}

