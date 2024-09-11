// import NavBar from "../components/navigation-bar/nav-bar";

import { useContext } from "react";
import { UserDetails } from "../navigations/navigation-static";
import UseReducerExample from "../components/hooks/useReducer/useReducer";










const AboutScreen = () => {

    const {darkHandler, salaryHandler} = useContext(UserDetails)

    const changeTheme=()=>{
        darkHandler()

    }

    return ( 
        <>
        {/* <NavBar/> */}
        <h1>WellCome to About Screen</h1>
        <UseReducerExample/>
        <button onClick={changeTheme} >Change Theme </button>
        <button onClick={salaryHandler}>Change salary</button>
        </>
     )
}
 
export default AboutScreen;