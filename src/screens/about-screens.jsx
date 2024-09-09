// import NavBar from "../components/navigation-bar/nav-bar";

import { useContext } from "react";
import { UserDetails } from "../navigations/navigation-static";










const AboutScreen = () => {

    const {darkHandler, salaryHandler} = useContext(UserDetails)

    const changeTheme=()=>{
        darkHandler()

    }

    return ( 
        <>
        {/* <NavBar/> */}
        <h1>WellCome to About Screen</h1>
        <button onClick={changeTheme} >Change Theme </button>
        <button onClick={salaryHandler}>Change salary</button>
        </>
     )
}
 
export default AboutScreen;