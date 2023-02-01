import { useEffect, useState } from "react";


const UseEffectApi = () => {

    const [user, setUser] = useState([])
    const [loader , setLoader] = useState(true)

    const getData = async () => {

        try {
            setLoader(false)
            const respons = await fetch("https://api.github.com/users")
            setUser(await respons.json())
        }
        catch (error) {
            setLoader(false)
            console.log("The error is", error)
        }

    }
    const deleteData = (id: number) => {
        const newArray = user.filter((curEle: any) => {
            return curEle.id != id
        })
        setUser(newArray)
    }

    useEffect(() => {
        getData();

    }, [])

    const clearData = () =>{
        setUser([])
    }

    return (
        <>
            <h1>Git Hub users Data 16-17</h1>
            {loader && <h1>Loading...</h1> }
            {user.map((curEle: any) => {
                return (
                    <div key={curEle.id}>
                        <li>{curEle.login}-{curEle.id}-{curEle.url}-{curEle.type}-
                            <button onClick={() => deleteData(curEle.id)}>delete</button>
                        </li>
                    </div>
                )
            })
            }
            <button className="btn1" onClick={clearData}>clear all</button>
        </>
    );
}

export default UseEffectApi;