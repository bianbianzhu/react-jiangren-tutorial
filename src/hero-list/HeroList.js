import React from "react";


const Heros = ['foo', 'bar', 'war'];

const HeroList = () => {


    return <ul>
        {Heros.map((el,index) => (<li key={index}>
            {el}
        </li>))}
    </ul>

// return <ul>
//       {Heros.map((el,index) => {
//        return <li key={index}>
//         {el}</li>} 
// </ul>
}
  

export default HeroList;
