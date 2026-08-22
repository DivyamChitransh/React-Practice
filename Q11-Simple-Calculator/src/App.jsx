import { useState } from "react";

function Calculator() {
  const [firstnumber,setFirstNumber] = useState("");
  const [secondnumber,setSecondNumber] = useState("");
  const [total,setTotal] = useState(0);
  const [operator,setOperator] = useState("")

  const handleNumber = (number) => {
    if(operator === ""){
      setFirstNumber(firstnumber + number);
    }else{
      setSecondNumber(secondnumber + number);
    }
  }

  const calculate = () => {
    const num1 = Number(firstnumber);
    const num2 = Number(secondnumber);
    let result;
    if(operator === "+"){
      result = num1 + num2;
    }
    if(operator === "-"){
      result = num1 - num2;
    }
    if(operator === "*"){
      result = num1*num2
    }
    if(operator === "/"){
      result = num1/num2;
    }
    setTotal(result);
    setFirstNumber("");
    setSecondNumber("");
    setOperator("")
  }
  return (
    <div>
      <h1>Simple Calculator</h1>
      <h3>First Number: {firstnumber}</h3>
      <h3>Second Number: {secondnumber}</h3>
      <h3>Total : {total}</h3>
      <div>
        <button onClick={() => {handleNumber("1")}}>1</button>
        <button onClick={() => {handleNumber("2")}}>2</button>
        <button onClick={() => {handleNumber("3")}}>3</button>
      </div>
      <div>
        <button onClick={() => {handleNumber("4")}}>4</button>
        <button onClick={() => {handleNumber("5")}}>5</button>
        <button onClick={() => {handleNumber("6")}}>6</button>
      </div>
      <div>
        <button onClick={() => {handleNumber("7")}}>7</button>
        <button onClick={() => {handleNumber("8")}}>8</button>
        <button onClick={() => {handleNumber("9")}}>9</button>
      </div>
      <div>
        <button onClick={() => {handleNumber("0")}}>0</button>
      </div>
      <div>
        <button onClick={() => {setOperator("+")}}>+</button>
        <button onClick={() => {setOperator("-")}}>-</button>
        <button onClick={() => {setOperator("*")}}>*</button>
        <button onClick={() => {setOperator("/")}}>/</button>
      </div>
      <div>
        <button onClick={calculate}> = </button>
      </div>
    </div>
  )
}

export default Calculator