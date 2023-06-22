import React from "react";

function Register() {
  return (
    <>
      <form className="register">
        <h2 className="loginHeading">Register</h2>
        <input type="text" placeholder="Usrename" />
        <input type="Password" placeholder="Password" />
        <button className="reg-btn">Register</button>
      </form>
    </>
  );
}

export default Register;
