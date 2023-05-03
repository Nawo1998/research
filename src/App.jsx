import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Process from './pages/Process'
import Results from './pages/Results'
import {BrowserRouter as Router,Route,Switch, BrowserRouter} from 'react-router-dom';



function App() {
  

  return (
    
      <BrowserRouter>
        <Router>
          <div>
            <Switch>

              <Route path="/">
              <Home/>
              </Route>

              <Route path="/Process">
              <Results/>
              </Route>

              <Route path="/Results">
              <Process/>
              </Route>

            </Switch>
          </div>
        </Router>
        </BrowserRouter>
    
  )
}

export default App
