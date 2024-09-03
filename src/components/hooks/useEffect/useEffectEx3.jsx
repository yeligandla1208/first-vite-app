import { useEffect, useRef, useState } from "react"








const UseEffectExample3=()=>{
    const [salary, setSalary] = useState(10000)
    const salaryRef = useRef(0)


    useEffect(()=>{
        console.log("useEffect trigerring...");
        
        salaryRef.current=salary

    },[salary])

    const salaryHandler=()=>{
        setSalary(salary+1000)
    }



    return(
        <>
          <h1>Current State {salary}</h1>
          <h3>Previous Reference State {salaryRef.current}</h3>
          <button onClick={salaryHandler}>Increase salary</button>
        </>

    )
}
export default UseEffectExample3

