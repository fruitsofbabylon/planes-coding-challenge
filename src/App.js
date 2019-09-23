import React from 'react';
import Card from './card/Card.js';
import Stack from './card/Stack.js';
import { data, results } from './Data.js';
import Output from './Output.js';
import './App.css';
import './Output.css';

class App extends React.Component {
  state = {
    currentIndex: 0
  }

  onDrop(result) {
    const currentId = data.doubles[this.state.currentIndex].id
    results[currentId] = result
    this.setState({ currentIndex: this.state.currentIndex + 1 })
    console.log(results)
  }

  currentPosition() {
    return data.doubles.length - 1 - this.state.currentIndex
  }

  render() {
    const cards = data.doubles.slice(this.state.currentIndex).reverse().map((double, index) =>
      <Card 
        name={double.name} 
        img={double.img}
        key={double.id}
        draggable={index == this.currentPosition()}
      />
    );

    const displayTable = this.state.currentIndex >= data.doubles.length

    return (
      <div className="App">
        <img id="Logo" src="logo.png" alt="Logo"></img>
        <p>Position: Buddie Double</p>
        <div id="no" onDrop={() => this.onDrop(false)} onDragOver={ (e) => {e.preventDefault()}}/>
        {displayTable ? <Output results={results}/> : <Stack> {cards} </Stack>}
        <div id="yes" onDrop={() => this.onDrop(true)} onDragOver={ (e) => {e.preventDefault()}}/>
        { !displayTable && 
          <div className="icons">
            <img src="cancel.png" alt="NO icon"></img>
            <img src="checked.png" alt="YES icon"></img>
          </div>
        }
      </div>
    );
  }
}

export default App;
