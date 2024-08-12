// convert the following callback-based function into one that returns a promise
// Q
// function fetchdata(callback){
//         setTimeout(() => {
//             const data ={id:1,value:"sample"}
//             callback(data)
//         },2000) 
// }
// fetchdata((data)=>{
//     console.log(data);    
// })


// task
console.log("stated Promise function");

function fetchdata(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {id:1, value: 'sample'}
            resolve(data)
        },3000)
    })
}
fetchdata()
.then((data) => {
    console.log(data);    
})
.catch((error) => {
    console.log(error);    
})