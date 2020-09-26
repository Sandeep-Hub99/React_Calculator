import React, { useState } from 'react';
import Keyboard from './Keyboard';
import Screen from './Screen';
import Calculator from './Calculator';

export default () => {
    const[input, setInput]=useState('');
    // Add Input
      const addInput = (char) => {
      var newInput ="";
         
      if(input.length === 0) {
          if(isNaN(Number(char))) {
              newInput = [...input];
              newInput += 0 +char;
              setInput(newInput);
              return;
          } else {
              newInput = [...input];
              newInput += char;
              setInput(newInput);
              return;
          }
      }

        newInput = input;
        newInput += char;
        setInput(newInput);
     }
    //Clear Input
    const clearInput = () => {
        setInput("");
    }

    //Calculate
    const calculate = () =>{
        setInput(evaluate(input))
    }
     function evaluate(fn) {
         return new Function('return ' + fn)();
     }

    return (
        <div className="calc">
            <div className="calcHeader">Calculator</div>
        <Screen input={input} />    
        <Keyboard addInput={addInput} calculate={calculate}/>
        <div className="clearButton" onClick={clearInput}>Clear</div>

        </div>
    )
};
    