

import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ProductScreen(){
    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetchData()
    },[])


    const fetchData=async()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        if(response.status===200){
            setProducts(response.data)
        }
    }




    return(
        <>
          <h1>Product Screen</h1>


          {
            products.length>0 && <>
            {
                products.map(each=><>
                <h2>{each.title}</h2>
                <button><Link to={` ${each.id}`}>View Product</Link></button>

                
                </>)
            }
            </>
          }
        </>
    )
}
export default ProductScreen