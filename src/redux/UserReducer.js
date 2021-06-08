const initState = {
  user: [],
};

//Action Types
const USER_LOGIN = "USER_LOGIN";
const ADMIN_LOGIN = "ADMIN_LOGIN";
const USER_LOGOUT = "USER_LOGIN";
const ADMIN_LOGOUT = "ADMIN_LOGOUT";

//Actions

export function userLoginAction(payload) {
  //return { type: USER_LOGIN, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/UserLogin";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
  };
}
export function adminLoginAction(payload) {
  //return { type: ADMIN_LOGIN, payload: payload };
  return async (dispatch) => {
    const url = "http://localhost:8080/api/AdminLogin";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
  };
}
export function userLogoutAction(payload) {
  return { type: USER_LOGOUT, payload: payload };
}
export function adminLogoutAction(payload) {
  return { type: ADMIN_LOGOUT, payload: payload };
}

export function UserReducer(state = initState, action) {
  switch (action.type) {
    case USER_LOGIN:
      //Logic
      return { ...state, users: [action.payload, ...state.users] };
    case ADMIN_LOGIN:
      //logic
      return { ...state, users: [action.payload, ...state.users] };
    case USER_LOGOUT:
      //logic
      return state;
    case ADMIN_LOGOUT:
      //logic
      return state;

    default:
      return state;
  }
}
