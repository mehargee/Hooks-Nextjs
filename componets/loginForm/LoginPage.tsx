import { useState } from "react"
import { couldStartTrivia } from "typescript"

const LoginPage = () => {

    const [emai, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry]: any = useState([])

    const submitForm = (e: any) => {
        e.preventDefault();
        const newEntry = { email: emai, password: password };
        setAllEntry([...allEntry, newEntry])

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
                        <h2>Email:&nbsp;&nbsp; {curEle.email} &nbsp; &nbsp; &nbsp;
                             password:&nbsp;&nbsp; {curEle.password}</h2>
                    )
                })
                }
            </div>
        </>
    );
}


export default LoginPage;