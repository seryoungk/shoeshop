import styled from "styled-components";
import React, { useState } from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function App() {
  const [shoes] = useState(data);
  return (
    <>
      <Navbar />
      <StyledContainer></StyledContainer>
      <StListBox>
        {shoes.map((shoe) => (
          <Card
            key={shoe.id} // Card 컴포넌트에 key를 할당함
            shoe={shoe} // Card라는 컴포넌트에 props를 전달함
          ></Card>
        ))}
      </StListBox>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              console.log(결과.data);
            })
            .catch(() => {
              console.log("연결 실패함");
            });
        }}
      >
        버튼
      </button>
    </>
  );
}

export default App;

const StListBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const StyledContainer = styled.div`
  background-image: url("https://codingapple.com/wp-content/uploads/2022/04/bg.png");
  background-size: cover;
  background-position: center;
  height: 300px;
`;
