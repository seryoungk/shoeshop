// Card.js
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

function Card({ shoe }) {
  let navigate = useNavigate();

  return (
    <>
      <StBox
        onClick={() => {
          navigate(`/detail/${shoe.id}`);
        }}
      >
        <img
          src={shoe.img}
          style={{
            width: 200,
            height: 200,
            borderRadius: 15,
          }}
          alt={shoe.title}
        />
        <div>
          {shoe.title}. {shoe.price}
        </div>
        <div>{shoe.content}</div>
      </StBox>
    </>
  );
}

export default Card;

const StBox = styled.div`
  gap: 20px;
  cursor: pointer;
`;
