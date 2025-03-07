import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    lists: [{ id: "1", title: "TODO", cards: [] }],
  },
  reducers:{
    
  }
});
