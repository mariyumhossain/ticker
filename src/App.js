import React, {Component} from 'react';
import './App.css';

class Ticker extends Component {
  constructor (){
    super()
    this.state = {
      count:0,
      isPaused: false
    }
  }

  componentDidMount(){
    
      setInterval (() => {
        this.setState({
            count: this.state.count + 1
        })
      },1000)
  

}

  shouldComponentUpdate(nextProps,nextState){
    if(!this.state.isPaused) return true
    else if(this.state.isPaused) return false
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  paused = () => {
    if(this.state.isPaused){
      this.setState({
        //  count: this.state.count,
        isPaused: false
      })
    }else{
      this.setState({
        //  count: this.state.count + 1,
          isPaused: true
      })
    }
  }
  

  render (){
    return (
    <div id="div">
      
      <p className="paragraph">The ticker is: {this.state.count}</p>
      <button onClick={this.reset} className="reset">Reset</button>
    <button onClick={this.paused} className="reset">{this.state.isPaused ? "Ticker is paused": "Pause Ticker"}</button>
    </div>
    )
  }
}

export default Ticker
