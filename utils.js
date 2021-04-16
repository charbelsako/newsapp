import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const clearHistory = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

const find = (data, array) => {
  for (let i = 0; i < array.length; i++) {
    if (data.title === array[i].title) {
      return i;
    }
  }
  return false;
};

module.exports = {storeData, getData, clearHistory, find};
