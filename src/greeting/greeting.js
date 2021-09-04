import React from 'react';

// class Greeting extends React.Component {

       
//      componentDidMount () {

//      }

//      componentWillUnmount () {

//      }

//     //  showTime = () => {
//     //      alert(`The time is ${new Date().toLocaleTimeString()}`)
//     //  }

//      showTime () {
//         alert(`The time is ${new Date().toLocaleTimeString()}`)
//      }


//      render () {
//         return <button onClick={this.showTime}>Click Me</button>
//      }

// }


const Greeting = () => {

   const handleClick = () => {
       alert('test');
   }
    
    return <button onClick={handleClick}>Click Me</button>
}


export default Greeting;



