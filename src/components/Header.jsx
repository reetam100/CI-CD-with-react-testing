import React from "react";

const Header = ({ name }) => {
  return <h2>Hello, {name ? name : "Guest"}!</h2>;
};

export default Header;
