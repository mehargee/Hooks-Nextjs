import React, { useEffect, useState } from "react";
import { CLIENT_RENEG_WINDOW } from "tls";


const UseEffect2 = () => {

    const [screenWidth, setScreenWidth] = useState(0)
       
    const actualWidth = () =>{
            setScreenWidth(window.innerWidth)
    }


   useEffect(()=>{
    setScreenWidth(window.innerWidth)
        window.addEventListener("resize" , actualWidth);

        return () => {
            window.removeEventListener("resize" , actualWidth);
        }
   })
   
    return (
        <div>
            <p>The Screen size inc/dec</p>
            <p>{screenWidth}</p>
        </div>
      );
}
 
export default UseEffect2;

