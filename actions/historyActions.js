import {GET_HISTORY} from '../actionTypes';
import {storeData, getData, clearHistory, find} from '../utils';

export const addHistory = data => async dispatch => {
  // add page to local Storage
  // get history from async storage.
  try {
    let history = await getData('history');
    if (history) {
      let index = find(data, history);
      if (index) {
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
  // load the history into memory from localstorage
  let data = await getData('history');
  if (data === null) {
    data = [];
  }
  //call dispatch
  dispatch({type: GET_HISTORY, payload: data});
};
