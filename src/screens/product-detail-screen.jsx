import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"








function ProductDetailScreen(){
    const dynamicPath = useParams()
    const [productData, setProductData] = useState({})

    useEffect(()=>{
        fetchData()
    },[dynamicPath])

    const fetchData = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${dynamicPath.productId}`)
        if(response.status === 200){
            setProductData(response.data)


        }
    }
    console.log(dynamicPath,"dynamicPath");
    

    return(
        <>
          <h2>Product Data</h2>
          {
            Object.keys(productData).length >0 && <>
            <h2>{productData.title}</h2>
            <img src={productData.image} width={100} height={100}/>
            <p>{productData.description}</p>
            </>
          }
        </>

    )
}
export default ProductDetailScreen