import { Component } from "react";
import CustomCardsExample from "../React-Bootstap/CardsRB";
import { MyToasts } from "../toasts/tostify";
import DemoCarousel from "../React-Bootstap/Tasks/carousal";
import { Button } from "react-bootstrap";
import { PiNoteBlankDuotone } from "react-icons/pi";




class CardAdded extends Component {

    state={
        employeData:[{name:"bharath", role:"React Dev" ,salary:30000},{name:"nandu", role:"Angular Dev" ,salary:30000} ]
    }



    clickHandler=()=>{
        // Need to add cards
        const newData={name:"Moni", role:"Next Js Dev", salary:40000}
        
       const updatedData= [ ...this.state.employeData,newData ]

       this.setState({
        employeData:updatedData
       })

    }

    removeHandler=(index)=>{
        // console.log(index);

        const fliteredData=this.state.employeData.filter((_,id) => id!==index)
        
        this.setState({
           employeData:fliteredData
        })
        

    }






  render() {
    return (
      <>
      <Button variant="primary" onClick={this.clickHandler}>Add Cart</Button>
      {/* <Button variant="primary" onClick={this.removeHandler}>remove</Button> */}


      <div className="container mt-5">
      <div className="row">

      {
        this.state.employeData.length > 0 ?(
        this.state.employeData.map((eachEmploye, index)=>{
      
        return(
              <div className="col-sm-4">
               
                  <CustomCardsExample title={eachEmploye.name} ind={index} text={eachEmploye.salary} removeHandler={this.removeHandler}/>
                </div>

            )

        })
    ) : ( <h2>No Data Found</h2>)
      }
      </div>
      </div>

     
      </>
    );
  }
}
export default CardAdded;


