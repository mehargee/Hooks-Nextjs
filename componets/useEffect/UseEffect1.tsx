import { useEffect, useState } from "react";


const UseEffect1 = () => {       // Ye component name hai, Na k useEffect
    const [count, setCount] = useState(0)
    // Title of document is Chat show
    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats(${count})`
        }
        else
            document.title = `Chats`
    },[count])      // square bracket dependency ko show krti hai, Iska mtlb count ki value jb change hogi tbi ye useEffect chaly ga.

    useEffect(() => {
        console.log('ye sirf 1 bar he chaly ga jb page refresh hoga first time')
    },[])

    return (
        <>
            <h1>useEffect Hooks</h1>
            <h2>{count}</h2>
            <button className="btn1" onClick={() => setCount(count + 1)}>Click</button>
        </>
    );
}

export default UseEffect1;