import { useState }  from 'react';

function useLocalStorage(key, initialValue) {
    //Set up a state property called storedValue.
        //This state property is going to take a function as it's initial value.
    const [storedValue, setStoredValue] = useState(() => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
        // If that item doesn't exist, it will return undefined
        const item = window.localStorage.getItem(key);

    // Parse and return stored json or, if undefined, return initialValue    
        return item ? JSON.parse(item) : initialValue; //        //The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
    }) // end of call back function from custom hook
    const setValue = value => {
        //Save state
        setStoredValue(value);
        //Save that value to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    
 //return storedValue from this hook in an array
    //set as the intialValue for the state property
    return [storedValue, setValue]    
}

export default useLocalStorage;
