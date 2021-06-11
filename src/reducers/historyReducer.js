import {GET_HISTORY, LOADING} from '../actionTypes';

const initialState = {
  history: ['hello'],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY:
      return {
        ...state,
        history: [...action.payload],
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
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
