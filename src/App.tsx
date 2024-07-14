import React, { useState, useEffect } from 'react';
import Search from './components/search/Search';
import List from './components/list/List';
import Pagination from './components/paginate/Pagination';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { Character } from './models/models';
import LoadingSpinner from './components/loader/LoadingSpinner';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [query, setQuery] = useLocalStorage('searchQuery', '');
    const [page, setPage] = useLocalStorage('searchPage', '1');
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (query) {
            fetchCharacters(query, parseInt(page, 10));
        } else {
            fetchCharacters('', parseInt(page, 10));
        }
    }, [query, page]);

    const fetchCharacters = (query: string, page: number): void => {
        setLoading(true);
        const url = query
            ? `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`
            : `https://rickandmortyapi.com/api/character/?page=${page}`;
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`No character was found!`);
                }
                return res.json();
            })
            .then((data) => {
                setCharacters(data.results);
                setError(null);
                setTotalPages(data.info.pages);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
                setCharacters([]);
                setError(err.message);
                setLoading(false);
            });
    };

    const handleSearch = (query: string): void => {
        setQuery(query);
        setPage('1');
        setLoading(true);
    };

    const handlePageChange = (newPage: number): void => {
        setPage(newPage.toString());
        setLoading(true);
    };

    return (
        <>
            <header>
                <h1>Characters</h1>
                <ErrorBoundary>
                    <Search onSearch={handleSearch} />
                </ErrorBoundary>
            </header>
            <main>
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        {error ? (
                            <div className='error-popup'>{error}</div>
                        ) : (
                            <>
                                <ErrorBoundary>
                                    <List characters={characters} />
                                    <Pagination
                                        currentPage={parseInt(page, 10)} // Convert page to number
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </ErrorBoundary>
                            </>
                        )}
                    </>
                )}
            </main>
        </>
    );
};

export default App;
