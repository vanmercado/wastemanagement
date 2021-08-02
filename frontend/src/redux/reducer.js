const initialState = { editItem: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_ITEM":
      return {
        ...state,
        editItem: action.payload,
      };
    case "UPDATE_USER_INFO":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
