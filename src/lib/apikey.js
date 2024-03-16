export const keyName= "key";

export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const myStorage = window.localStorage.getItem(keyName);
  return myStorage;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem(keyName, key);
};
//console.log(localStorage);