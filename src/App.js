import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
        <a className="App-image" href="https://github.com/itsmichaelyu/wordCounter" aria-label="Source Code"
           rel="noopener noreferrer">
            <svg className="Filter" height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
        </a>
      <header className="App-header">
          <span className="App-title-text">Word Counter</span>
          <Worker></Worker>
      </header>
    </div>
  );
}

let wordNum = 0;
let charNum = 0;

class Worker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            original: '',
            modified: '',
            disabled: 1,
            reg: '',
            labels: [],
            data: [],
            datasets: [{
                data: [],
                // 13 colors
                backgroundColor: ['red', 'green', 'blue', 'purple', 'yellow', 'pink', 'orange', 'violet', 'brown', 'gray', 'white', 'black', 'cyan'],
                fontColor: ['white'],
                borderWidth: 0,
            }]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        this.setState({original: event.target.value});
        this.countWords(event.target.value);
        this.countChars(event.target.value);
    }

    countWords(data) {
        wordNum = data.split(/[\s]+/).filter(function (el) {return el !== '';}).length;
    }

    countChars(data) {
        charNum = data.split(/[\n\r]+/).join('').length;
    }

    render() {
        return (
            <span>
                <h1>Word Count: {wordNum}</h1>
                <h1>Character Count: {charNum}</h1>
                <textarea spellCheck={false} className="App-input" value={this.state.original} onChange={this.handleChange} />
            </span>
        );
    }
}

export default App;