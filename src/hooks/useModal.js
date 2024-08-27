import { useContext } from "react";

import GlobalContext from "../contexts/GlobalContext";

const useModal = () => {
  const { dispatch } = useContext(GlobalContext);

  // Open a Component modal
  const openModal = (Modal) => {
    dispatch({
      type: "HANDLE_MODAL",
      payload: Modal,
    });
  };

  // Close a Modal
  const closeModal = () => {
    dispatch({
      type: "HANDLE_MODAL",
      payload: null,
    });
  };

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
