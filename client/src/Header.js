import React from "react";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        MyBlog
      </a>
      <nav>
        <a href="/login" className="login">
          Login
        </a>
        <a href="/" className="register">
          Register
        </a>
      </nav>
    </header>
  );
};

export default Header;
