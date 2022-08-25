import { createSlice } from "@reduxjs/toolkit";
import { USER_API_BASE_URL } from "../service/ClinicService";
// console.log(CLINIC_API_BASE_URL);
const initialState = {
  user: null,
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userUpdate: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlices.actions;

export default authSlices;

export const SignIn = (user) => {
  return (dispatch) => {
    fetch(`http://localhost:8080/api/service/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Что то пошло не так!");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        dispatch(authActions.userUpdate(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
