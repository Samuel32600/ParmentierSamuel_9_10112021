import React from 'react'
import '../styles/App.css'

// import logo from './logo.svg'

//import des components
import Header from './Header';
import NavBarLeft from './Left-Nav-Bar';
import HomePage from '../pages/Home-page';

import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter>

          <Header />
          <NavBarLeft/>
          <HomePage/>

        </BrowserRouter>
      </div>

    )
  }
}

export default App;