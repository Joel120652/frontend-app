const initState = {
  userlist: [],

  //Login page Authentication
  loginAction: false,
};

//Action Types
const USER_LOGIN = "USER_LOGIN";
const ADMIN_LOGIN = "ADMIN_LOGIN";
//const USER_LOGOUT = "USER_LOGOUT";
//const ADMIN_LOGOUT = "ADMIN_LOGOUT";

//Actions
export function userLoginAction(payload) {
  //return { type: USER_LOGIN, payload: payload };
  return async (dispatch) => {
    // using try and catch for login Authentication

    try {
      const url = "http://localhost:8080/api/UserLogin";
      const requestBody = { ...payload };

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      //dispatch({ type: USER_LOGIN, payload: payload });
    } catch (error) {
      console.log(error);
    }
    /*const url = "http://localhost:8080/api/UserLogin";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    //dispatch({ type: USER_LOGIN, payload: payload });*/
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
/*export function userLogoutAction(payload) {
  //return { type: USER_LOGOUT, payload: payload };

  return async (dispatch) => {
    const url = `http://localhost:8080/api/UserLogout/${payload.userId}`;
    await fetch(url, { method: "DELETE" });
  };
}
export function adminLogoutAction(payload) {
  return { type: ADMIN_LOGOUT, payload: payload };
}*/

//Redux logic
export function UserReducer(state = initState, action) {
  switch (action.type) {
    case USER_LOGIN:
      //Logic
      return {
        ...state,
        userlist: [action.payload, ...state.userlist],
        loginAction: true,
      };
    case ADMIN_LOGIN:
      //logic
      return { ...state, userlist: [action.payload, ...state.userlist] };
    /*case USER_LOGOUT:
      //logic
      //return state;
      const oldList = state.user;
      oldList.splice(action.payload);

      return { ...state, user: [...oldList] };

    case ADMIN_LOGOUT:
      //logic
      return state;*/

    default:
      return state;
  }
}
