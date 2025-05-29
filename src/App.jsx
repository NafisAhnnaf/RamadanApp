import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/RamadanApp'>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
