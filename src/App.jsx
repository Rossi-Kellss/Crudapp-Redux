
// import './App.css'

import Create from './components/Create'
import Navbar from './components/Navbar'
import Read from './components/Read'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
