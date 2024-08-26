







const CustomList=(prop)=>{
    const{list}=prop
    return(
        <ol>
        <>
        {
        list.map((eachValue,index)=>{
            return <li key={index} >{eachValue}</li>
        })
        }
            </>
        </ol>
    )
}

export default CustomList


export const CustomOrderedList=()=>{
    return(
        <ol>
            <ListItems/>
        </ol>
    )
}


const ListItems=()=>{

    const Fruits=["Apple","Banana","Kiwi","Mango","Orange"]
    return(
        <>
        {
        Fruits.map((eachFruit)=>{
            return <li>{eachFruit}</li>
        })
        }
            </>




    )
}


// DRY : DONT REPEAT YOURSELF


// const Clist = ()=>{
//     return(
        
//         <ul>
            
//             <li>Apple</li>
//             <li>Banana</li>
//             <li>Mango</li>

//         </ul>
//     )
// }

// export default Clist