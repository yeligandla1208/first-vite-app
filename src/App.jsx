// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Clist from './components/lists/list'
// import { Tables } from './daily_tasks/07-08-task/tablestask'
// import { Cards } from './daily_tasks/07-08-task/cards'
// import CustomImage from './components/images/images.jsx'
import { recipeData } from './data/recipeData.js'
import { MainHeadings } from './components/headings/heading.jsx'
import { Ingredients } from './components/Api-data/dataValues.jsx'
// import { SecondaryHeading } from './components/headings/heading.jsx'





function App(){
//   const flowerListing=[{
//     name:"flower1",
//     src: "https://img.freepik.com/premium-photo/flower-sunflower-isolated-yellow-background_198067-526531.jpg",
//     width: 200,
//     height:200,
//   },
//   {
//     name:"flower2",
//     src:"https://img.freepik.com/premium-photo/close-up-bunch-sunflowers-white-background_198067-525954.jpg",
//     width:250,
//     height:250,
//   },
//   {
//     name:"flower3",
//     src:"https://img.freepik.com/premium-photo/painting-flower-with-blue-sky-background-sunflower_198067-526437.jpg",
//     width:300,
//     height:300,
//   },
//   {
//     name:"flower2",
//     src:"https://img.freepik.com/premium-photo/close-up-bunch-sunflowers-white-background_198067-525954.jpg",
//     width:350,
//     height:350,
//   },
//   {
//     name:"flower3",
//     src:"https://img.freepik.com/premium-photo/painting-flower-with-blue-sky-background-sunflower_198067-526437.jpg",
//     width:400,
//     height:450,
//   }
// ]





  return (
    <>
      {/* <CustomImage source="https://img.freepik.com/premium-photo/flower-sunflower-isolated-yellow-background_198067-526531.jpg" alternateText="flower" width={200} height={200}/>
      <CustomImage source="https://img.freepik.com/premium-photo/close-up-bunch-sunflowers-white-background_198067-525954.jpg" alternateText="flower" width={250} height={250}/>
      <CustomImage source="https://img.freepik.com/premium-photo/painting-flower-with-blue-sky-background-sunflower_198067-526437.jpg" alternateText="flower" width={300} height={300}/>     */}


      {/* {
      flowerListing.map(eachImage =>{
        return(

        <CustomImage source={eachImage.src} height={eachImage.height} width={eachImage.width} alternateText={eachImage.name}/>
        )
      }) 
      
      }*/}
      {
        recipeData.map(eachrecipe=>{
          return(
            <div>
              {/* <MainHeadings id={eachrecipe.id}/> */}
              <MainHeadings heading={eachrecipe.name}/>
              {/* <SecondaryHeading id={eachresipe.id}/> */}
              <Ingredients Ingred={eachrecipe.ingredients}/>

             
             

            </div>
          )
        })
      }
    

    </>
    
  )
}


export default App
