import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("products")
  const [age, setAge] = useState(0)

  useEffect(() => {
    console.log("useEffec rendaring");
    fetchData();
    // title
    document.title=`current age ${age}`
  }, [type, age]);

  const fetchData = async () => {
    try {
    //   const endpoint = "products";

      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );
      if (status == 200) {
        console.log(data);

        setData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const changeTypeHandler=(each)=>{
    setType(each)

  }
  const ageHandler = ()=>{
    setAge(age+1)
  }

  return(
    <>
    <h1>useEffet Example</h1>;
    <button onClick={ageHandler}>Age increage</button>
    {
        ["products","carts","users"].map(each=> <button key={each.index} onClick={()=>changeTypeHandler(each)}>{each}</button>)
    }
     <h1>{type}</h1>
    {
        data.map(each=><>
        <p>{JSON.stringify(each)}</p>
        </>)
    }

    
    </>
  )
    
};
export default UseEffectExample;
