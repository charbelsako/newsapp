import {GET_HISTORY, LOADING} from '../actionTypes';
import {storeData, getData, clearHistory, find} from '../utils';

export const addHistory = data => async dispatch => {
  // clearHistory('history');
  // add page to local Storage
  // get history from async storage.
  try {
    let history = await getData('history');
    if (history) {
      let index = find(data, history);
      if (index !== -1) {
        console.log('found index');
        history.splice(index, 1);
      }
      history.unshift(data);
    } else {
      history = [data];
    }
    await storeData(history, 'history');
  } catch (e) {
    //save error
  }
};

export const getHistory = () => async dispatch => {
  dispatch({type: LOADING, payload: null});
  // load the history into memory from localstorage
  let data = await getData('history');
  console.log(data);
  if (data === null) {
    data = [];
  }
  //call dispatch
  dispatch({type: GET_HISTORY, payload: data});
};
