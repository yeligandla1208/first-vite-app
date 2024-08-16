


const CustomImage=(props)=>{
    // console.log(props);
    
    const{source,height,width,alternateText}=props
        
    return(
        <img src={source} height={height} width={width} alt={alternateText}/>
    )

}

export default CustomImage