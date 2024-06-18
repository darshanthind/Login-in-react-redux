import { createStore } from "redux";
import axios from "axios";
import { Logins } from "./dispatch";
import { wait } from "@testing-library/user-event/dist/utils";
const inital = {
    token: ""
}

const Functions = (state = inital, action) => {
    if (action.type == "login") {
        console.log("happyworld")
        console.log(action.payload, "have");
        return { ...state, token: action.payload }
    } else if (action.type == "LOGPROCESS") {
        find(action.payload.user, action.payload.pass);
        return state;
    } else if (action.type == "Logout") {
        return { ...state, token: "" };
    }
    return state;
}


const find = async (user, pass) => {
    try {

        await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user,
                password: pass,
                expiresInMins: 30,
            })
        })
            .then(res => res.json())
            .then((d) => {
                store.dispatch(Logins(d.token));

            })


    } catch (err) {
        console.log(err);
    }
}
const store = createStore(Functions);

export default store;
