import axios from 'axios';

import {GET_HEADLINES, LOADING} from '../actionTypes';

export const fetchNews = (category, country) => async dispatch => {
  dispatch({type: LOADING});
  // do stuff
  const response = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=' +
      country +
      '&category=' +
      category +
      '&apiKey=88ba75a801124ae1a2bacc106a5140d0',
  );
  // then call dispatch
  dispatch({type: GET_HEADLINES, payload: response.data.articles});
};
