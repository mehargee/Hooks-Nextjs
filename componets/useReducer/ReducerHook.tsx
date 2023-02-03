import { useReducer } from "react";

type reducerType = {
    state : Number,
    action: String
}

const ReducerHook = () => {

        const init = 0;
        const reducer = (state , action)  => {
           
            // if(action.type === "INCREMENT")
            // return state + 1
            // if(action.type === "DECREMENT")
            // return state - 1

            switch(action.type)
            {
                case "INCREMENT" : 
                return state + 1
                break;
                case "DECREMENT" :
                return state - 1
                break;
                default:
                alert("Click any btn")
            }
        }

    const [state , dispatch ] = useReducer( reducer , init)

    return ( 
        <>
           <h5>useReducer Hook-20</h5>   
           <h3>{state}</h3> 
           <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment+</button> 
           {state}
           <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement-</button>     
        </>
     );
}
 
export default ReducerHook;