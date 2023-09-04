import styled from "styled-components";
import React, { useState } from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import axios from "axios";
function App() {
  let [shoes, setShoes] = useState(data);
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
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
              axios // 추가로 두 번째 JSON 데이터를 받아오기
                .get("https://codingapple1.github.io/shop/data3.json")
                .then((결과) => {
                  let copy2 = [...copy, ...결과.data];
                  setShoes(copy2);
                  console.log(결과.data);
                })
                .catch(() => {
                  console.log("실패해쪄염");
                });
            })
            .catch(() => {
              console.log("실패함ㅋㅋ");
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
