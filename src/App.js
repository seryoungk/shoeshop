import styled from "styled-components";
import React, { useState } from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

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
