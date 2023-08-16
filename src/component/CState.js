import React, { Component } from 'react'

class CState extends Component {
    constructor(){
        super()
        this.state ={
            name: 'kishan'
        }
    }
    updateData(){
        this.setState({name:'rahul'})
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.updateData()}></button>
      </div>
    )
  }
}
export default CState