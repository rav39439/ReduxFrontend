import * as React from 'react';
import { Component } from 'react';




export class MyCounter extends Component{
 
  

  state = {
      count: 0,
    }
  

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

//export default Counter