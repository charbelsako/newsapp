import axios from 'axios';

import {GET_SOURCES} from '../actionTypes';

export const fetchSources = () => async dispatch => {
  // do stuff;
  const response = await axios.get(
    'https://newsapi.org/v2/sources?apiKey=88ba75a801124ae1a2bacc106a5140d0',
  );

  // then call dispatch
  dispatch({type: GET_SOURCES, payload: response.data.sources});
};
