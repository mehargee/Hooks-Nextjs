import { useState } from "react";
import style from '@/styles/name.module.css'



const ThreeDot = () => {
     const [myObject, setMyObject] =  useState({name: "Ali" , age: 27 , class: "MSC"})


     const updatObject = () => {
            setMyObject({...myObject, name: "Usman", age : 40 })
     }

    return ( <>
    <h2>Three dot</h2>
    <h1 className={style.round}>Name: {myObject.name} & age: {myObject.age} & class {myObject.class} </h1>
    <button className={style.btn1} onClick= {updatObject} >Update</button>
    </> );
}
 
export default ThreeDot;