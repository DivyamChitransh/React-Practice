import { useReducer } from "react";

function reducer(state,action){
  switch(action.type){
    case "Increment":
      return state + 1;
    case "Decrement":
      if(state <= 0){
        return state;
      }
      else{
      return state - 1;
      }
    case "Reset":
      return 0;
    case "Increment_By_5":
      return state + 5;
    case "Decrement_By_5":
      if(state <= 5){
        return state;
      }else{
        return state - 5;
      }
    default :
      return state;
  }
}

function Counter(){
  const [count,dispatch] = useReducer(reducer,0);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch({type:"Increment"})}>+1</button>
      <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
      <button onClick={() => dispatch({type:"Decrement"})}>-1</button>
      <button onClick={() => dispatch({type:"Increment_By_5"})}>+5</button>
      <button onClick={() => dispatch({type:"Decrement_By_5"})}>-5</button>
    </div>
  )
}

export default Counter;