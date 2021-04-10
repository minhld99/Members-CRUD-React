import { useState, useEffect } from 'react';

const STORAGE_KEY = 'members-crud';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    
    const data = window.localStorage.getItem(STORAGE_KEY);

    if (!data) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    } 
    else {
      setItems(JSON.parse(data));
    }
    
  }, []);

  const putItems = items => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems(items);
  };

  const clearItems = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems([]);
  };

  return [items, putItems, clearItems];
}

export default useStorage;