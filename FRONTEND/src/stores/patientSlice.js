// src/stores/patientSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: [],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
  },
});

export const { addAppointment } = patientSlice.actions;
export default patientSlice.reducer;
