import React, { Component } from 'react'
import '../States.css'
export class StatesinClassComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:"samatha",
         count:0
    }
}


    render() {

          setTimeout(() =>{
              this.setState({
                  name:"Samatha P",
                  
              })
          },2000)
          

        return (
            <div className="demo">
                <h1>Welcome { this.state.name} </h1>
                <h1>Count:{ this.state.count}</h1>
                <button onClick={() =>{
                this.setState({
                    count:this.state.count+1
                })
                }}>Increment Count</button>
                 <br></br>
            
           <button onClick={() =>{
                this.setState({
                    count:this.state.count-1
                })
                }}>Decrement Count</button>
                <br></br>
               
         <button onClick={() =>{
                this.setState({
                    count:this.state.count=0
                })
                }}>Reset</button>


               <br></br>
               



            </div>
        )
    }
}

export default StatesinClassComponent
