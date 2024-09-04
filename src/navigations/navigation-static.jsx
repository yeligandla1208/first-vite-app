import {  Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screens";
import NavBar from "../components/navigation-bar/nav-bar";
import InvalidScreen from "../screens/invalid-screen";










const NavigationStatic = () => {
    return ( 
        <>
         <NavBar/>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>        {/*Route is a prop*/}     
            <Route path="/about" element={<AboutScreen/>}/>   {/*Route is a prop*/}
            <Route path="/*" element={<InvalidScreen/>}/>

            


        </Routes> 
         <Routes>
            <Route path="/login" element={<HomeScreen/>}/>
         </Routes>
        </>
     
        
        
      
     );
}
 
export default NavigationStatic;