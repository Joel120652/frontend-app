const initState = {
  userlist: [],

  //Login page Authentication
  loginAction: false,
};

//Action Types
const USER_LOGIN = "USER_LOGIN";
//const ADMIN_LOGIN = "ADMIN_LOGIN";
//const USER_LOGOUT = "USER_LOGOUT";
//const ADMIN_LOGOUT = "ADMIN_LOGOUT";
//const LOGIN_ACTION = "LOGIN_ACTION";

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

      //const us = await response.json();
      //sessionStorage.setItem("us", JSON.stringify(us));

      //Update the UI
      dispatch({ type: USER_LOGIN, payload: payload });
    } catch (error) {
      console.log(error);
    }

    //dispatch({ type: USER_LOGIN, payload: payload });
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
/*export function adminLoginAction(payload) {
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
}*/

//Redux logic
export function UserReducer(state = initState, action) {
  switch (action.type) {
    /*case LOGIN_ACTION:
      return { ...state, loginAction: true };*/
    case USER_LOGIN:
      //Logic
      return {
        ...state,
        userlist: [action.payload, ...state.userlist],
      };
    /*case ADMIN_LOGIN:
      //logic
      return { ...state, userlist: [action.payload, ...state.userlist] };
    case USER_LOGOUT:
      //logic
      //return state;
      const oldList = state.user;
      oldList.splice(action.payload);

      return { ...state, user: [...oldList] };

       userlist: [action.payload, ...state.userlist],

    case ADMIN_LOGOUT:
      //logic
      return state;*/

    default:
      return state;
  }
}
