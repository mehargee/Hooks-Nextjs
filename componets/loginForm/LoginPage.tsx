import { useState } from "react"
import { couldStartTrivia } from "typescript"

const LoginPage = () => {

    const [emai, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry]: any = useState([])


    const submitForm = (e: any) => {
        e.preventDefault();

        if (emai && password) { // form validation, khali field b login ho rai thi.

            const newEntry = { id: new Date().getTime.toString, email: emai, password: password }; //Id unique krne k liye hai ta k Map me error na aye
            setAllEntry([...allEntry, newEntry])

            setEmail("")
            setPassword("")

        }
        else {
            alert("Plz filled all field")
        }

    }
    return (
        <>
            <h1>Hooks-9</h1>
            <div className="login-form" onSubmit={submitForm}>
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="email" id="username" name="username" autoComplete="off"
                            value={emai}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div className="detailData">

                {allEntry.map((curEle: any) => {
                    return (
                        <h2 key={curEle.id}>Email:&nbsp;&nbsp; {curEle.email} &nbsp; &nbsp; &nbsp;
                            password:&nbsp;&nbsp; {curEle.password}</h2>

                    )
                })
                }
            </div>
        </>
    );
}


export default LoginPage;