import { useEffect, useState } from "react"






// event listeners
const UseEffectExample2=()=>{
    const [position, setPosition] = useState({
        xPosition:0,
        yPosition:0
    })


    const mouseMoveTracker=(event)=>{
        console.log(event)
        const{clientX,clientY}=event
        setPosition({...position,xPosition:clientX,yPosition:clientY})
    }






    useEffect(()=>{
        window.addEventListener("mousemove",mouseMoveTracker)

        // Clean up for the memory leaks, componentWillUnmount mwthod
        return()=>{
            window.removeEventListener("mousemove",mouseMoveTracker)
        }





    },[])



    return(
        <>
        <h1>Event Listeners</h1>
        <h2>X position : {position.xPosition}</h2>
        <h2>y position : {position.yPosition}</h2>
        </> 
    )
}
export default UseEffectExample2