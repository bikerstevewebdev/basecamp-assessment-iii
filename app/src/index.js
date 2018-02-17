import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Component1, Component2, Button} from './App';
// import Component1 from './App';
// import Component2 from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Component1 />, document.getElementById('Component1'));

ReactDOM.render(<Button />, document.getElementById('Button'));

ReactDOM.render(<Component2 />, document.getElementById('Component2'));

registerServiceWorker();