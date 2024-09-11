import React, { useState } from 'react'
import { useReducer } from 'react'





const reducer =(state, action)=>{
    switch(action.type){
        case "INCREMENT_AGE":
        return{...state,age:state.age+1}
        case "CHANGE_NAME":
        return{...state,username:action.payload}
        default:
            return state
    }
    

}

function UseReducerExample() {

    const intialState = {
        username:"bharath",
        age: 23,
        todos: ["work up at 8am"],
        homeAdress:{

        }
    }

    const [currentState, dispatch] =useReducer(reducer, intialState)
    const [name,setName] = useState("")
    
    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const onSbmit=()=>{
        if(name){

            dispatch({
                type:"CHANGE_NAME",
                payload:name
            })
        }

    }

    const incrementAgeHandler=()=>{
        dispatch({
            type:"INCREMENT_AGE",
            payload:1
        })
    }

  return (
    <div>
       
           <input type="text" value={name} onChange={nameHandler}/>
           <button onClick={onSbmit}>Submit</button>
       

        <h1>{currentState.username}</h1>
        <h1>{currentState.age}</h1>
        <button onClick={incrementAgeHandler}>Increment age</button>

        {
            currentState.todos.map(eachTodo=>{
                <h4>{eachTodo}</h4>
            })
        }
    </div>
  )
}

export default UseReducerExample