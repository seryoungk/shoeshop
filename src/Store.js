import { configureStore, createSlice } from "@reduxjs/toolkit";

// 상품 슬라이스 생성
const productSlice = createSlice({
  name: "product",
  // 초기 상태
  initialState: [
    { id: 1, name: "Grey Yordan", count: 1 },
    { id: 2, name: "White and Black", count: 1 },
  ],
  reducers: {
    // 각 상품의 count를 증가시키는 액션
    plus: (state, action) => {
      const { id } = action.payload;
      return state.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
    },

    // 각 상품의 count를 감소시키는 액션
    minus: (state, action) => {
      const { id } = action.payload;
      return state.map((product) => {
        if (product.id === id && product.count > 0) {
          return {
            ...product,
            count: product.count - 1,
          };
        }
        return product;
      });
    },
  },
});

// 스토어 생성
export default configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export const plus = (id) => ({
  type: "product/plus",
  payload: { id }, // id를 payload로 전달
});

export const minus = (id) => ({
  type: "product/minus",
  payload: { id }, // id를 payload로 전달
});
