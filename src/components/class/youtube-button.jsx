import {Component} from "react"
import CustomCardsExample from "../React-Bootstap/CardsRB"
import Counter from "./counter"




class YoutubeButton extends Component {
    state={
        isSubscribe: false,
        text1: "Subscribe",
        text2: "Subscribed"
    }

    clickedButton=()=>{
        this.setState({
            isSubscribe:!this.state.isSubscribe,
            
        },()=>{
            
        })
    }




    render(){
        return(
            <>
            {
                this.state.isSubscribe ?
                <div><CustomCardsExample/></div>:
                <div><h2>Pease Subscrib to access the content</h2></div>

            }
              <button onClick={this.clickedButton} >{this.state.isSubscribe? this.state.text2:this.state.text1}</button>
              <Counter/>

            </>
        )
    }
}
export default YoutubeButton