import React from "react";

function Login() {
  return (
    <>
      <form className="login">
        <h2 className="loginHeading">Login</h2>
        <input type="text" placeholder="Usrename" />
        <input type="Password" placeholder="Password" />
        <button className="loginbtn">Login</button>
      </form>
    </>
  );
}

export default Login;
