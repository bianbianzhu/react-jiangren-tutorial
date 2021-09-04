import React from "react";

class StopWatch extends React.Component {
  state = {
    counter: 0,
    isDisable: false,
  };

  startCount = () => {
    console.log("start");

    this.setState({
        counter: 0,
        isDisable: true
    });

    const cb = () => {
        console.log('cb cb cb');
        
       this.setState({

          counter: this.state.counter + 1,
      
       })
    }

    this.timer = setInterval(cb,1);

  };

  stopCount = () => {
    console.log("stop");
  
    clearInterval(this.timer);
    this.setState({
        isDisable: false,
     
    })
  };

  render() {
    return (
      <div>
        <h2 className="time-stamp">{this.state.counter}</h2>
        <button onClick={this.startCount} disabled={this.state.isDisable}>Start</button>
        <button onClick={this.stopCount}>Stop</button>
      </div>
    );
  }
}

export default StopWatch;




