import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const clearHistory = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

export const find = (data, array) => {
  for (let i = 0; i < array.length; i++) {
    if (data.title === array[i].title) {
      return i;
    }
  }
  return -1;
};

//module.exports = {storeData, getData, clearHistory, find};
