export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        transactions: state.transactions.filter(
          ele => ele.id !== action.payload
        ),
      };
    }
    case 'Add_TRANSACTION': {
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    }
    default: {
      return state;
    }
  }
};
