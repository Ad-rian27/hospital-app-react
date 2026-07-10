import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPatient from './components/AddPatient'
import SearchPatient from './components/SearchPatient'
import DischargePatient from './components/DischargePatient'
import ViewPatients from './components/ViewPatients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
      <Routes>

<Route path='/' element={<AddPatient />}/>
<Route path='/search' element={<SearchPatient />}/>
<Route path='/delete' element={<DischargePatient />}/>
<Route path='/view' element={<ViewPatients />}/>

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
