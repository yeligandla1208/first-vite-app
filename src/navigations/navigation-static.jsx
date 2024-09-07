import {  Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/home-screen";
import AboutScreen from "../screens/about-screens";
import NavBar from "../components/navigation-bar/nav-bar";
import InvalidScreen from "../screens/invalid-screen";
import CategoryScreen from "../screens/category-screens";
import { JeweleryScreen } from "../screens/jewellery-screen";
import { ElectronicsScreen } from "../screens/electronics-screens";
import ProductScreen from "../screens/product-screens";
import ProductDetailScreen from "../screens/product-detail-screen";










const NavigationStatic = () => {
    return ( 
        <>
         <NavBar/>
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>        {/*Route is a prop*/}     
            <Route path="/about" element={<AboutScreen/>}/>   {/*Route is a prop*/}
            <Route path="/*" element={<InvalidScreen/>}/>

            <Route path="category" element={<CategoryScreen/>}>

            <Route index element={<ElectronicsScreen/>}/>
            
            <Route path="jewelery" element={<JeweleryScreen/>}/>
            <Route path="electronics" element={<ElectronicsScreen/>}/>
            </Route>


            <Route path="products" element={<ProductScreen/>}/>
            <Route path="products/:productId" element={<ProductDetailScreen />}/>


            


        </Routes> 
         <Routes>
            <Route path="/login" element={<HomeScreen/>}/>
         </Routes>
        </>
     
        
        
      
     );
}
 
export default NavigationStatic;