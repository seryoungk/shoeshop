import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../Store"; // 수정된 import 경로
import { getWatchedItems } from "../Store";

function Cart() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [watchedItems, setWatchedItems] = useState([]);

  useEffect(() => {
    // 최근 본 상품을 가져옵니다.
    const watchedItems = getWatchedItems();
    setWatchedItems(watchedItems);
  }, []);

  return (
    <div>
      <Navbar />
      <Table>
        <thead>
          <tr>
            <th>수량</th>
            <th>상품명</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.count}
                <button onClick={() => dispatch(plus(product.id))}> + </button>
                <button onClick={() => dispatch(minus(product.id))}> - </button>
              </td>
              <td>{product.name}</td>
              <td>300,000₩</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h2>최근 본 상품:</h2>
        {watchedItems.map((item, index) => (
          <span key={item}>
            {index > 0 ? ", " : ""}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Cart;
