






export const upDatedValues= () => {
    const update=[]
    for(let i=1;i<10;i++){
        const myObject= {
            id:i,
            text:`Update Item ${i}`
        }
        update.push(myObject)
    }
    console.log(update);
    return update    
}
upDatedValues()