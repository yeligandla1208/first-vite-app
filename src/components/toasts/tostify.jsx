import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { sucessToasts, errorToasts } from './toast-helper';




export const MyToasts= () => {
  const notify = () => {
    sucessToasts("iam Sucess","top-right")
  }

  return(
    <>
    <button onClick={notify}>Click Me</button>
    <ToastContainer/>
    </>
  )


}








// function MyToasts() {
//   const notify = () => {
//   sucessToasts("Notification Success","top-right")







    // toast("Default Notification !");

    // toast.success("Submission Success !", {
    //   position: "top-left"
    // });

    // toast.error("Error Notification !", {
    //   position: "top-left"
    // });

    // toast.warn("Warning Notification !", {
    //   position: "bottom-left"
    // });

    // toast.info("Info Notification !", {
    //   position: "bottom-center"
    // });

    // toast("Custom Style Notification with css class!", {
    //   position: "bottom-right",
    //   className: 'foo-bar'
    // });
//   };

//    return (
//       <>
//         <button onClick={notify} style={{width:100, height:50}}>Submit</button>
//         <ToastContainer />
//       </>
//     );
// }
// export default MyToasts