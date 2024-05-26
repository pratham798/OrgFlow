import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employee: [],

};

export const OrgEntityReducer = createSlice({
  name: 'OrgEntity',
  initialState,
  reducers: {},
});

export const {} = OrgEntityReducer.actions;

export default OrgEntityReducer.reducer;
