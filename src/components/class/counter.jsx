import {Component} from "react"






class Counter extends Component {
    state={
        count: 0
    }
    Countinc=()=> {
        this.setState({
            count:this.state.count+1
        },()=>{})
    }


    render(){
        return(
            <>
            <h1>Counter {this.state.count}</h1>
            <button onClick={this.Countinc}>Incriment</button>
            <button>DeIncriment</button>
            <button>Reset</button>

             


            </>

        )
    }
}
export default Counter