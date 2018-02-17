import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
};
class Component1 extends Component {
  render() {
    return (
      <div className="myComp1">
        <h2 className="wantToLearn">If you want to learn React, click the button below</h2>
      </div>
    )
  }
};
class Button extends Component {
  render() {
    return (
      <button>Well at least we got some components! Click me, I don't work!</button>
    )
  }
};
class Component2 extends Component {
  render() {
    return (
      <h3>Congratulations! You know (a little bit of) React!</h3>
    )
  }
};




/*BUTTON TOM-FOOLERY THAT DIDN'T WORK
****************************************************************************************************/
//     var buttonArray = ['I don\'t have a clue what is going on!', 'Ok, this kind of makes sense...', 'Well I see how that works and...', 'Ah! I get it now!'];
//     getInitialState: function (){
//       return {counter: 0}
//     },
//     handleClick: function() {
//       this.setState({counter: this.state.counter +1})
//     },
//     return (
//       <button onClick={this.handleClick}>{buttonArray[this.state.counter]}</button>
/************************************************************************************************** */
/*var comp1Text = 'If you want to get a better understanding of React, click the button below:)';
var Component1 = React.createClass({
  render: function(){
    return (<h1>{comp1Text}</h1>)
  }
});
React.render(<Component1 />, document.getElementById('Component1'));*/
/*
var Button = React.createClass({
  getInitialState: function(){
    return {buttonArray: 0}
  },
  render: function() {
    return (
      <button onClick = {this.handleClick}>{this.state.buttonArray}</button>
    )
  }
});
React.render(<Button />, document.getElementById("button"));*/

export { App, Component1, Component2, Button};