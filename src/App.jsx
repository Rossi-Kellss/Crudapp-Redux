
// import './App.css'
import Create from './components/Create'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
