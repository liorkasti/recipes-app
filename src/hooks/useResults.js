import { useEffect, useState } from 'react';

export default () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const favoritesHandler = async searchTerm => {
    const index = favoriteList.findIndex(m => m.id === movie.id);
    console.log("exist? " + (popularResult[index].stared))
    console.log("index: " + (index))
    try {
        if (favoriteList[index].stared) {
          favoriteList[index].stared = false
            await AsyncStorage.setFavoriteList(favoriteList.filter(m => m.id !== movie.id));
        } else {
            await AsyncStorage.setFavoriteList([...favoriteList, { movie }])
            favoriteList[index].stared = true
        }
    } catch (err) {
        console.error(`localStorageUtility.getItem: ${err}`);;
    };
  };


  useEffect(() => {
  }, []);

  return [favoritesHandler, favoriteList, errorMessage];
};
