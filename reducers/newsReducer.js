import {GET_HEADLINES, LOADING} from '../actionTypes';

const initialState = {
  news: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HEADLINES:
      return {
        ...state,
        news: [...state.news, ...action.payload],
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
