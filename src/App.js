import React, { Component } from 'react'; //different
import logo from './logo.svg';
import './App.css';
import Board from './board'
class App extends Component { //different
  render() {
    return (
    <div className="App" id={'root'}>
        <Board />
    </div>
    );
  }
};

export default App;
