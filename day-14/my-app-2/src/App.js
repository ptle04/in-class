import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import { decimalFeet, feetToMeters, metersToFeet } from './Utility';

function App() {
  const randomNum = _.random(1000);
  const myHeight = feetToMeters(decimalFeet(5,9));
  const myFakeHeight = metersToFeet(decimalFeet(5,9));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <p>My random number is: {randomNum}!</p>
        <p>My height in meters is: {myHeight}</p>
        <p>My fake height is: {myFakeHeight} </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
