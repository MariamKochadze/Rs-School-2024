import React, { ChangeEvent, FormEvent } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import Button from '../button/Button';
import ErrorButton from '../erroButton/ErrorButton';

import './Search.css';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useLocalStorage('searchQuery', '');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('searchQuery', query);
        onSearch(query.toLocaleLowerCase().trim());
    };

    return (
        <div className='serach-form-container'>
            <form
                className='search-form'
                onSubmit={handleSubmit}
            >
                <input
                    type='text'
                    placeholder='Search characters'
                    value={query}
                    onChange={handleInputChange}
                />
                <Button type='submit'>Search</Button>
                <ErrorButton />
            </form>
        </div>
    );
};

export default Search;
