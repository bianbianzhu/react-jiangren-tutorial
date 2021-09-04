import React, { useState, useEffect } from "react";

const StopWatch2 = () => {
  const [counter, setCounter] = useState(0);
  let timer;

  useEffect(() => {
      
  });

  const start = () => {

   setInterval(() => {
      setCounter(counter + 1);
    }, 1);
  };

  const stop = () => {
    // clearInterval(timer);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={start}>Start now</button>
      <button onClick={stop}>Stop now</button>
    </div>
  );
};

export default StopWatch2;
