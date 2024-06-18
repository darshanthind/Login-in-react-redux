import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "./dispatch";

function AfterLogin() {

    const [token, settoken] = useState(true);

    const nav = useNavigate();
    let dispatch = useDispatch();


    useEffect(() => {
        let j = JSON.parse(localStorage.getItem("token"))
        if (j == null) {
            nav("/");
        }

    }, [token]);

    const handleout = () => {
        localStorage.clear();
        dispatch(Logout());
        settoken(false);
    }

    return (
        <>
            <h1>Thanks for Login:</h1>
            <button onClick={handleout}> LogOut</button>
        </>
    )
}

export default AfterLogin;