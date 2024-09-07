import { Link, Outlet } from "react-router-dom"





function CategoryScreen(){
    return(
        <div>
            <h1>Category Sreen</h1>

            <Link to={"electronics"}>Electronics</Link>
            <Link to={"jewelery"}>Jewelery</Link>


            <Outlet/>


        </div>

    )
}
export default CategoryScreen