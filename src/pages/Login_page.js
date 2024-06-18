import { useEffect, useState } from "react";
import { Loginprocess } from "./dispatch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [User, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [token_user, settoken] = useState(false);
    const nav = useNavigate();

    const dispatch = useDispatch();



    let token = useSelector((state) => state.token);

    useEffect(() => {

        if (token !== "" && token !== undefined) {
            localStorage.setItem("token", JSON.stringify(token));

            nav("/deshboard");
            token = "";
        }
        let t = JSON.parse(localStorage.getItem("token"));

        if (t !== null && t !== "") {
            nav("/deshboard");
        }
    }, [token]);
    const handleSub = (e) => {
        e.preventDefault();
        dispatch(Loginprocess(User, password));
        setUser("");
        setPassword("");
        // localStorage.setItem("token", JSON.stringify(token));
        settoken(true);

    }
    console.log(token, "V");
    // const tokenset = () => {
    //     settoken(JSON.parse(localStorage.getItem("token")));
    // }
    // if (token !== "") {
    //     // tokenset();

    // }

    return (
        <>
            <h1>Login Page:(used react-redux):</h1>
            <form onSubmit={handleSub}>
                <label>UserName: {" "}
                    <input type="text" value={User} onChange={(e) => setUser(e.target.value)} placeholder="username" />
                </label><br /><br />
                <label>Password: {" "}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
                </label><br></br><br />
                <button type="submit">Submit</button>
            </form >
        </>
    )
}

export default Login;