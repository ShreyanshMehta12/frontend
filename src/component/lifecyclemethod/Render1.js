import React, { Component } from 'react'

export default class Render1 extends Component {
    constructor()
    {
        super();
        this.state={
            email:"vikas@gmail.com"
        }
       console.log('hello con')
    }
  render() {
    console.log('rendor method')
    return (
      <div>
         {/* <h1>User  {this.props.title}</h1>  */}
                <h1>User  {this.state.email}</h1> 
                <button onClick={()=>this.setState({email:"raj@gmail.com"})}>click</button>
      </div>
    )
  }
}