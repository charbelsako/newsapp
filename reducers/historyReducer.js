import {GET_HISTORY} from '../actionTypes';

const initialState = {
  history: ['hello'],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY:
      return {
        ...state,
        history: [...action.payload],
      };
    // case ADD_HISTORY:
    //   return {
    //     ...state,
    //     history: [...action.payload, ...state.history],
    //   };
    default:
      return state;
  }
}
