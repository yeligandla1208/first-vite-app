import axios from "axios";
import { useRef, useState } from "react";
import './uncontrolled.css'









const UncontrolledComponent = () => {


    const usernameRef = useRef("")
    const passwordRef = useRef("")

    const [formErrors, setFormErrors] = useState({})

    const onSubmit=(event)=>{
        event.preventDefault()


        const usernameEntered = usernameRef.current.value

        const passwordEntered = passwordRef.current.value

        // console.log(usernameEntered);
        // console.log(passwordEntered);

        const formErrors = validation(usernameEntered,passwordEntered)

        // console.log(formErrors);

        if(Object.keys(formErrors).length > 0){
            // Trigger the error
            setFormErrors(formErrors)

        }
        else{
            // Hit the api
            loginApi(usernameEntered,passwordEntered)
        }
        console.log(formErrors);
        
        
        
        

    }


    const validation = (username,password) =>{

        const FormErrors={}

        if(!username){
            FormErrors.usernameError="Please enter username"
        }else if(username.length > 15){
            FormErrors.usernameError = "Please enter less than 15 characters"
        }

        if(!password){
            FormErrors.passwordError="Please enter password"
        }else if(password.length > 15){
            FormErrors.passwordError = "Please enter less than 15 characters"
        }

        return FormErrors



    }


    const loginApi = async(username,password)=>{
        try{
        const response = await axios.post("https://dummyjson.com/auth/login", {
   
          "username": username,
          "password": password,
        })
        console.log(response);

    }
    catch(err){
        console.log(err); 
        
    }
       
        
    }


    // displayNameHandler = () =>{
    //   updateName = 
    // }


  return (
    <>
      <form className="main-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label className="username" htmlFor="username">username</label>
          <input type="text" className="form-control" id="username" ref={usernameRef} placeholder="UserName"/>
          <span>{formErrors?.usernameError}</span>
        </div>
        <div className="form-group">
          <label className="password" htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef} placeholder="Password"/>
          <span>{formErrors?.passwordError}</span>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
     
      
    <table className="table-main">
      <tbody>
  
    <tr className="tr">
      <th>Company</th>
      <th>Contact</th>
      
    </tr>
    <tr className="tr">
      <td>nlsdj</td>
      <td>kmdcslm</td>
      
    </tr>
    </tbody>
</table>







    </>
  );
};
export default UncontrolledComponent;
