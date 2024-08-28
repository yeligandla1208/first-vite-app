/**Synchronous */
// console.log("hii iam synchronous!");
// console.log("result start");
// console.log("console3");
// console.log("console5");
// console.log("console4");

/**Asynchronous */

// /**CALLBACKS type-1*/
// function funnc1(callback){
//     setTimeout(()=>{
//         console.log("task1")
//         callback()
//     },3000)
// }

// function func2(){
//     console.log("task2");
//     console.log("task3");
//     console.log("task4");
//     console.log("task5");

// }
// funnc1(func2)

/**CALLBACKS type-2*/

// const cars = (callback)=>{
//     console.log("Toyato cars ready to race");
//     setTimeout(() => {
//         console.log("Toyota Cars Not Workin Properly");
//         callback();

//     },3000)
//     console.log("Toyota cors not ready to race");

// }
// const bikes = (callback1)=>{
//     console.log("Honda bikes ready to race");
//     setTimeout(() => {
//         // console.log("Honda bikes Not Workin Properly");
//         callback1("Honda bikes Not Workin Properly");

//     },3000)
//     console.log("Honda bikes not ready to race");

// }

// cars(() =>{
//     // bikes(()=>{})
// })

/**callabacks */

// function task1(callback){
//     setTimeout(()=>{
//         console.log("task1 completed");
//         callback()
//     },4000)

// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log("task2 completed");
//         callback()
//     },1000)

// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log("task3 completed");
//         callback()
//     },2000)

// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log("task4 completed");
//         callback()
//     },3000)

// }
// /**this is Callback Hell */
// console.log("Tasks are started");

// task1(()=>{
//     task2(() => {
//         task3(() =>{
//             task4(()=>{console.log("All tasks completed");})
//         })
//     })
// })

/** promises = An objest that  */

// PROMISES

// Do THESE CHRES IN ORDER

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3.TAKE OUT THE TRASH

// function walkDog() {

//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//     const walkDog =true
//     if(walkDog){
//         resolve("you walk the dog")
//     }
//     else{
//         reject("you didn't walk the dog")
//     }
//     }, 5000);
//   });
// }


// function cleanthekitchen() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             const cleanthekitchen = true
//             if(cleanthekitchen){
//                 resolve("you clean the kitchen");                
//             }
//             else{
//                 reject("you didn't clean the kitchen");                
//             }
//           }, 1000);
//     });
// }


// function takeoutthetrash() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             const takeoutthetrash = true
//             if(takeoutthetrash){
//                 resolve("you take out the trash")
//             }
//             else{
//                 reject("you didn't take out the trash")
//             }
//           }, 3000);
        
//     });
// };

// walkDog().then(() => {
//     return cleanthekitchen();
// })
// .then(() => {
//     return takeoutthetrash();
// })
// .catch((error) => {
//     console.error(error)
// })



// function takeoutthetrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             resolve("you take out the trask ")
//         })
//     })
// }
