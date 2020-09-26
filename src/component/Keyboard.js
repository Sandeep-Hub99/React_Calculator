import React from 'react';
//import {calculate} from './calculator';


export default (props) => {
    return (
<div style={{flex: 1, display: "flex", flexDirection: "column" }}>
    <div style={{ display: "flex", flex: 1}}>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("7")}}> 7</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("8")}}> 8</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("9")}}> 9</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("/")}}> /</div>
    </div>
    </div>

    <div style={{ display: "flex", flex: 1}}>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("4")}}>4</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("5")}}>5</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("6")}}>6</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("*")}}>x</div>
    </div>
    </div>

    <div style={{ display: "flex", flex: 1}}>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("1")}}>1</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("2")}}>2</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("3")}}>3</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("-")}}>-</div>
    </div>
    </div>

    <div style={{ display: "flex", flex: 1}}>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("0")}}>0</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput(".")}}>.</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=> {props.calculate()}}>=</div>
    </div>
    <div className="centerme">
        <div className="roundButton" onClick={()=>{props.addInput("+")}}>+</div>
    </div>
    </div>
</div>
 )
};