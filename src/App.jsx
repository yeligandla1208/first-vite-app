
import './App.css'
import  UserGreeting  from './condtional/condtionalRen.jsx'




function App(){

  return (
    <>
      <UserGreeting isLoggedIn={false} username="Hii"/>
      {/* <UserGreeting isLoggedIn={false} username="Bharath"/> */}
      {/* <UserGreeting isLoggedIn={true} username="Bro"/> */}
      {/* <UserGreeting isLoggedIn={true} username="Hello"/> */}
    </>
    
  )
}


export default App
