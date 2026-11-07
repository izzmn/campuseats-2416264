import { useEffect, useState } from 'react'
// Step 1: a custom hook. Same shape as useState, but the value survives a page refresh.
export function useLocalStorage(key, initialValue) {
 const [value, setValue] = useState(() => {
 const saved = localStorage.getItem(key)
 return saved !== null ? JSON.parse(saved) : initialValue
 })
 useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
 }, [key, value])
 return [value, setValue]


useEffect(() => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}, [key, value]); 

return [value, setValue];
}
//src/hooks/useLocalStorage.js: like the code-along, with try/catch around JSON.parse and setItem.