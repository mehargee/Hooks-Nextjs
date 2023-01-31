import style from '@/styles/name.module.css'
import { useState } from 'react';

const Myname = () => {

    const [changeName, setchangeName]: any = useState("Muhammad Asad")

    const updateName = () => {
        if(changeName === "Muhammad Asad")
        setchangeName("Asad Ali")
        else
        setchangeName("Muhammad Asad")

    }

    return (
        <div>
            <h2>Hooks1-2 UseState</h2>
            <h1 className={style.name}>{changeName}</h1>
            <button className={style.btn} onClick={updateName}>Click ChangeName</button>
        </div>
    );
}

export default Myname;