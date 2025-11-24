import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLocal = async (key, value) => {
  try { await AsyncStorage.setItem(key, JSON.stringify(value)); } 
  catch (e) { console.warn(e); }
};

export const getLocal = async key => {
  try { const v = await AsyncStorage.getItem(key); return v ? JSON.parse(v) : null; }
  catch (e) { console.warn(e); return null; }
};
