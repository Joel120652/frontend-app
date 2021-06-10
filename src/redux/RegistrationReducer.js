const initState = {
  list: [],
};

//Action Types
const REGISTRATION_CREATE = "REGISTRATION_CREATE";
const REGISTRATION_LIST = "REGISTRATION_LIST";

//Action Functions
export function createRegistrationAction(payload) {
  //return { type: REGISTRATION_CREATE, payload: payload };
  //Connect to Sprint 1/ Backend Logic is written here

  return async (dispatch) => {
    const url = "http://localhost:8080/api/Registration";
    const requestBody = { ...payload };

    //Http client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    dispatch({ type: REGISTRATION_CREATE, payload: payload });
  };
}

export function getResgistrationList(payload) {
  return { type: REGISTRATION_LIST, payload: payload };
}

//Reducer Logic
export function RegistrationReducer(state = initState, action) {
  switch (action.type) {
    case REGISTRATION_CREATE:
      //Logic
      return { ...state, list: [action.payload, ...state.list] };

    case REGISTRATION_LIST:
      return state;

    default:
      return state;
  }
}
