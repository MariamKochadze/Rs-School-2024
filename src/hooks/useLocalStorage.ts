import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: string): [string, React.Dispatch<React.SetStateAction<string>>] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? item : initialValue;
        } catch (error) {
            console.error(`Error retrieving ${key} from localStorage:`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, storedValue);
        } catch (error) {
            console.error(`Error setting ${key} to localStorage:`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
