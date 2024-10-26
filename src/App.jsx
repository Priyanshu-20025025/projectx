import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/button";
import { ConfettiFireworks } from './pages/ConfettiFireworks';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='text-4xl'>hello world!</div>

<ConfettiFireworks />
</>
  )
}

export default App
