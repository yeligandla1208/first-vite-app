
import './App.css'
// import { DemoCarousel } from './components/React-Bootstap/Tasks/corousal'
// import  UserGreeting  from './condtional/condtionalRen.jsx'
// import CustomCardsExample from './components/React-Bootstap/CardsRB.jsx'
// import { CustomarData } from './data/cardsdata.js'

import BootstrapExam from './components/React-Bootstap/bootstrap'







function App(){

  return (
    <>
      {/* <UserGreeting isLoggedIn={false} username="Hii"/> */}
      {/* <UserGreeting isLoggedIn={false} username="Bharath"/> */}
      {/* <UserGreeting isLoggedIn={true} username="Bro"/> */}
      {/* <UserGreeting isLoggedIn={true} username="Hello"/> */}

      {/* {
        CustomarData.map(each => {
          return(
            <>
            <CustomCardsExample title={each.name} text={each.designetion}/>
            </>
          )

        })
      }


      <CustomCardsExample title={"Dog"} text={"Dog Image"}/> */}

     <BootstrapExam/>

     {/* <div className="App">
            <h1>React Carousel with `react-responsive-carousel`</h1>
            <DemoCarousel />
        </div>
      */}
     
    </>
    
  )
}


export default App
