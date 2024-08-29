import { useState } from "react"
import { createTodolist } from "./jsHelpers"






const CustumTodo=()=>{
    const [todos,setTodos]=useState(createTodolist())


    const addTodoHandler=()=>{
        const currentLength = todos.length
        const myObject={
            id : currentLength+1,
            text : `items ${currentLength+1}`
        }
        setTodos([...todos,myObject])
    }

    const deleteHandler=(targetId)=>{
        const filteredItems = todos.filter(eachTodo=>eachTodo.id != targetId)
        setTodos(filteredItems)
    }
    
    const updateHandler=()=>{
        const upDatedLength = todos.length 
        const object={
            id : upDatedLength + 1,
            text : `Updated ${upDatedLength+1}`
        }
        setTodos([...todos,object ])
        
        // const upDateItend = todos.filter(eachTodo=>eachTodo.id == id)

        // setTodos(upDateItend)
    }


    return(
        <>
         <h2>Custom Todo</h2>  
         <button onClick={addTodoHandler}>Add Todos</button>
         <ol>
         {
            todos.map(eachTodo=>{
                const {id,text} = eachTodo
                return(
                    // <React.Fragment key={id}>
                    <div key={id}>

                    <li>
                        {text}
                    </li>

                    <button onClick={()=>deleteHandler(id)}>Delete Item</button>
                    <button onClick={()=>updateHandler(id)}>Update</button>

                    {/* </React.Fragment>     */}
                    </div>           
                )
            })
         }
         </ol>
        </>      
    )
}
export default CustumTodo