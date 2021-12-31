import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const token = sessionStorage.getItem("access-token");
    if (token) {
      dispatch({ type: "AUTH_IS_READY", payload: token });
    } else {
      dispatch({ type: "AUTH_IS_READY", payload: token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
