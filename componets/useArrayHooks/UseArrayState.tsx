import style from "@/styles/name.module.css"
import { useState } from "react";



const UseArrayState = () => {

    let bioData = [
        { id: 0, name: "Ali", age: 23 },
        { id: 1, name: "Usman", age: 26 },
        { id: 2, name: "Tahir", age: 22 },
        { id: 3, name: "Usman", age: 21 },
        { id: 4, name: "Javeed", age: 24 },

    ]
    const [dataClear, setdataClear] = useState(bioData)

    const clearValue = () => {

        setdataClear([])

    }
    const deleteData = (id:Number) => {
           const newArray = dataClear.filter((curEle) => {
            return curEle.id != id
           }) 
           
           setdataClear(newArray)

    }


    return (
        <>
            <h2>Using Array hooks 3-4-6</h2>
            {dataClear.map((curEle) => {
                return (
                    <h1 className={style.round} key={curEle.id}>
                        Name:{curEle.name} & Age: {curEle.age}
                        <button className={style.btn} onClick={() => deleteData(curEle.id)}> delete </button>
                    </h1>
                )
            })
            }
            <button className={style.btn1} onClick={clearValue}>Clear Data</button>
        </>
    );
}

export default UseArrayState;