import { RotatingLines } from "react-loader-spinner"







const RotatingLoader = () =>{
    return(
        (<RotatingLines
            visible={true}
            height="90"
            width="90"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />)
    )
}
export default RotatingLoader