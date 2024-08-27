import { useContext } from "react";

import GlobalContext from "../../contexts/GlobalContext";

const Modals = () => {
  const { state } = useContext(GlobalContext);

  return <>{state.modal !== null && state.modal}</>;
};

export default Modals;
