import { createContext, useReducer } from "react";

import handleModal from "../reducers/handleModal";

const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  let initialState = {
    modal: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_MODAL":
        return handleModal(state, action);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
