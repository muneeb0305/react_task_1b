import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";
import axios from "axios";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user, token, role } = action.payload;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      return {
        ...state,
        isAuthenticated: true,
        user,
        token,
        role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  console.log(state)
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
  }
  window.location.href = "/" + role + "/login";
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const url = 'https://reacttask.mkdlabs.com/v2/api/lambda/check';
          const headers = {
            'Content-Type': 'application/json',
            'X-Project': 'cmVhY3R0YXNrOmQ5aGVkeWN5djZwN3p3OHhpMzR0OWJtdHNqc2lneTV0Nw==',
            'Authorization': `Bearer ${token}`
          };
          const data = { role: 'admin' };
          const response = await axios.post(url, data, { headers });
          const role = localStorage.getItem("role");
          const { user } = response.data;
          dispatch({ type: "LOGIN", payload: { token, user, role } });
        } catch (error) {
          window.location.href = "/" + role + "/login";
          tokenExpireError(dispatch, error.message);
        }
      }
    };
   
    checkTokenValidity();
  }, []);
  
  

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
