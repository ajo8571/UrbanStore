import React, {Component} from 'react';
import logo from './logo.png';
import Main from './components/MainComponent'
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

const store=ConfigureStore();

class App extends Component {
  
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
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
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
