import React from "react";
import Navbar from "../components/Navbar";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { plus, minus } from "../Store"; // 수정된 import 경로

function Cart() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

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
    </div>
  );
}

export default Cart;
