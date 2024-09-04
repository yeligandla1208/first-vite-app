import { useNavigate } from "react-router-dom";








const InvalidScreen = () => {

    const navigate = useNavigate()
    const navigateHandler=()=>{
        navigate("/")
    }

    return (
        <>
        <h1>Page not found 404</h1>
        <button onClick={navigateHandler}>Back to home</button>
        </>
    );
}
 
export default InvalidScreen;