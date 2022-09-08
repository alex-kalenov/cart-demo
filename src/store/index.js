import { configureStore } from "@reduxjs/toolkit";

import * as modules from "./exports";

let slices = {};

for (const name of Object.keys(modules)) {
  slices[name] = modules[name].reducer;
}

const store = configureStore({
  reducer: slices,
});

export default store;
