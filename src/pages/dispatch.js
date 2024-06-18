export const Logins = (token) => ({
    type: "login",
    payload: token
})
export const Loginprocess = (u, p) => ({
    type: "LOGPROCESS",
    payload: { user: u, pass: p }
});
export const Logout = () => ({
    type: "Logout"

})


