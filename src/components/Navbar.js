import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Navbar() {
  let navigate = useNavigate();

  const result = useQuery(["작명"], async () => {
    try {
      const response = await axios.get(
        "https://codingapple1.github.io/userdata.json"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("오류", error);
    }
  });

  return (
    <div>
      <Nav>
        <div>ShoeShop</div>
        <div>::</div>
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </div>
        <UserGreet>{result.data.name}</UserGreet>
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
const UserGreet = styled.div`
  display: flex;
  padding-left: 50px;
`;
