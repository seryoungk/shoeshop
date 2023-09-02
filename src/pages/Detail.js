import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import data from "../data";

function Detail() {
  const [shoes] = useState(data);
  const { id } = useParams();

  // id를 정수로 변환
  const shoeId = parseInt(id, 10);

  // id를 기반으로 데이터 배열(data)에서 해당 아이템을 찾습니다.
  const shoe = shoes.find((shoe) => shoe.id === shoeId);

  return (
    <div>
      <Navbar />
      <h1>{shoe.title}</h1>
      <h2>
        {shoe.content}, {shoe.price}원
      </h2>
      <img
        src={shoe.img}
        style={{
          width: 500,
          height: 500,
          borderRadius: 7,
        }}
        alt={shoe.title}
      />
    </div>
  );
}

export default Detail;
