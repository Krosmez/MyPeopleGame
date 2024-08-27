const handleModal = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    modal: payload,
  };
};

export default handleModal;
