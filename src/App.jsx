// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Clist from './components/lists/list'
import { Tables } from './daily_tasks/07-08-task/tablestask'
import { Cards } from './daily_tasks/07-08-task/cards'
function App() {
  

  return (
    <div>

    <Clist/>
    <Tables/>

    <Cards/>
    </div>
    
  )
}

export default App
