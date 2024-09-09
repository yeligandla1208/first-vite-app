// import UseEffectExample3 from "../components/hooks/useEffect/useEffectEx1";
import { useContext } from "react";
import UseEffectExample from "../components/hooks/useEffect/useEffectEx1";
import { UserDetails } from "../navigations/navigation-static";
// import NavBar from "../components/navigation-bar/nav-bar";
// import UseEffectExample2 from "../components/hooks/useEffect/useEffectEx2";








const HomeScreen = () => {
  const{salary}  = useContext(UserDetails)
    return ( 
        <>
          
          <h1>Wellcome to HomeScreen  {salary}</h1>
          <UseEffectExample/>
        </>
     );
}
 
export default HomeScreen;