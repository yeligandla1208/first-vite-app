import React,{useState} from "react"







const Counter =()=>{
    const [age,setAge]=useState(10)

    // Switch case method
     
     const ageHandler=(type)=>{
        switch(type){
            case "Increment":
            //   setAge(age+1)
            setInterval(()=>{
                setAge(age=>age+1)
            },1000)
              break
            case "Decrement":
                if(age>0){
                    setAge(age-1)
                }
                else{
                    alert("Age cannot be negative")
                }
                break
                case "Reset":
                    if(age>0){
                        setAge(0)
                    }
                    else{
                        alert("Don't rest the age")
                    }
                default:
                    break

                }
     }




    // const incrementAgeHandler=()=>{
    //     setAge(age+1)
        
    // }
    // const decrementAgeHandler=()=>{
    //     if(age>0){
    //         setAge(age-1)
    //     }
    //     else{
    //         alert("Age cannot be negative")
    //     }
    // }
    // const resetAgeHandler=()=>{
    //     setAge(0)
    // }

    return(
        <>
         <h3>Counter Example</h3>
         <h2>Current age - {age}</h2>
         <button onClick={()=>ageHandler("Increment")}>Increment age</button>
         <button onClick={()=>ageHandler("Decrement")}>Decrement age</button>
         <button onClick={()=>ageHandler("Reset")}>Decrement age</button>

        </>

    )
}
export default Counter