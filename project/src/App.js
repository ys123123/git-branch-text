import React from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom'
import config from './router/config'
import RouterView from './router/index'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <RouterView routes={config} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
