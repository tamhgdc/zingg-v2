import { ADD_ALL } from './actions';

const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case ADD_ALL:
      newState = { ...state, ...action.payload };
      return newState;
    default:
      break;
  }
};

export default reducer;
