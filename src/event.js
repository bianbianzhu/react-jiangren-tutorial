import React from 'react';

class ActionLink extends React.Component {




   handleClick = (event) => {
       event.preventDefault();
       console.log(event);
   }



   render() {
       return <form>
           <button type="submit" onClick={this.handleClick}>Link</button>
       </form>
   }


}


export default ActionLink