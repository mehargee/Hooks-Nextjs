import { useRef, useState } from "react";


const UnControlled = () => {

    const lucky =  useRef(null); // ye sirf 1 input filed or 1 he bar render krany k liye use krte hain
    const [show , setShow] = useState(false)

    const Submited = (e:any) => {
       e.preventDefault();
        const value:any =  lucky.current.value;
        value === "" ? alert('Plz fill the data') : setShow(true)
}

    return ( 
    <div>
        <h3>Hooks 18</h3>
        <form action="#" onSubmit={Submited}>
            <label htmlFor="lucky"> Enter Your lucky Name:</label>
            <input type="text" id="lucky" ref={lucky} />
            <button>Submit</button>
        </form>
        <p>
        { show ? `Your lucky name is ${lucky.current.value}` : ""} 
        </p>
    </div> );
}
 
export default UnControlled;