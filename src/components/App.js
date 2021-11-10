import React from 'react'
import '../styles/App.css'

// import logo from './logo.svg'

//import des components
import Header from './Header';
import Nav_Bar_Left from './Left-Nav-Bar';
import Home_Page from '../pages/Home-page';

import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter>

          <Header />
          <Nav_Bar_Left/>
          <Home_Page/>

        </BrowserRouter>
      </div>

    )
  }
}

export default App;