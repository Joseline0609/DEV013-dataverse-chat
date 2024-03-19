export const keyName= "keyName";

//Esta funcion recibe un argumento  pero no retorna nada

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem("keyName", key);
};
console.log(localStorage);

// Esta funcion retorna pero no recibe ningun argumento

export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const myStorage = window.localStorage.getItem(keyName);
  return myStorage;
};