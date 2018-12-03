import React, { Component } from 'react';
import './App.css';
import Text from './text/Text';
import Box from './box/Box'



class App extends Component {
  
  state = {
    numTexts: 0
  }

  onAddChild = () => {
    this.setState({
      numTexts: this.state.numTexts + 1
    });
  }
  

  render() {
    const children = [];
    const jokeApi = 'https://geek-jokes.sameerkumar.website/api';

    var request = require('request');
    var joke = [];

    joke[this.state.numTexts]='LOADING HILARIOUS JOKE...';
    console.log(this.state.numTexts)
    console.log(joke[this.state.numTexts])

    // request(options, (err, response, body) => {
    //     if(!err && response.statusCode === 200)
    //         joke[this.state.numTexts] = body;
    // });

    fetch('GET', jokeApi)
    .then



    console.log(joke[this.state.numTexts])
    for (var i = 0; i < this.state.numTexts; i += 1) {
      console.log(joke[i])
      children.push(<Text key={i} number={i} curJoke = {joke[i]} />);
    };
    
    return (
      <div className="App">
        <h1>Wanna see a joke?</h1>
        <h3>Click the button below!</h3>
        <button onClick={this.onAddChild}>Click me for a new hilarious joke</button>
        <Box addChild={this.onAddChild}>
          {children}
        </Box>
      </div>
    );
  }
}

export default App;
