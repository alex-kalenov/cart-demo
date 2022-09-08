import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    items: [
      { id: 1, title: "Книга", price: 65.66 },
      { id: 2, title: "Пальто", price: 32.45 },
      { id: 3, title: "Апельсин", price: 45.32 },
      { id: 4, title: "Машина", price: 200000 },
      { id: 5, title: "Ручка", price: 15.99 },
      { id: 6, title: "Булка", price: 14 },
      { id: 7, title: "Трактор", price: 90999 },
      { id: 8, title: "Тетрадь", price: 21.49 },
      { id: 9, title: "Батарейка", price: 41.33 },
    ],
  },
  reducers: {
    //comming soon...
  },
});

export default slice;
