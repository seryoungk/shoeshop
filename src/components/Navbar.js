import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  return (
    <div>
      <Nav>
        <div>ShoeShop</div>
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div>Cart</div>
        <div
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </div>
      </Nav>
    </div>
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  padding-left: 10px;
  padding: 25px;
  width: 100%;
  gap: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
`;
