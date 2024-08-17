
import  {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './containers/home'
import About from './containers/about'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Skills from './containers/skills'
import Resume from './containers/resume'
import NavBar from './components/navBar'



function App() {
  
  return (
      <div className='App'>
        {/*@tsparticles*/}

        {/*navbar component*/}
        <NavBar />

        {/*main component*/}
        <Routes>
          <Route path='/'index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume/>} />
        </Routes>
       
    </div>
  )
}

export default App
