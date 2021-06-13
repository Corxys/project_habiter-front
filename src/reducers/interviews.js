const initialState = {
  interviews: [],
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_INTERVIEWS_SUCCESS':
      return {
        ...oldState,
        interviews: action.payload.interviews,
      };
    default: 
      return oldState;
  };
};

export default reducer;