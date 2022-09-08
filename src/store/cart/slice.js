import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total_count: 0,
    total_price: 0,
  },
  reducers: {
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const { id, title, price } = action.payload.item;
      const count = parseInt(action.payload.count);
      if (itemIndex !== -1) {
        state.items[itemIndex].count += count;
      } else {
        state.items.push({
          id,
          title,
          price,
          count: count,
        });
        state.total_count++;
      }
      const new_total_price =
        state.total_price + action.payload.item.price * count;
      state.total_price = +new_total_price.toFixed(2);
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const count = parseInt(action.payload.count);
      state.items[itemIndex].count -= count;
      if (!state.items[itemIndex].count) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.item.id
        );
        state.total_count--;
      }
      const new_total_price =
        state.total_price - action.payload.item.price * count;
      state.total_price = +new_total_price.toFixed(2);
    },
  },
});

export const actions = slice.actions;

export default slice;
