// App.tsx
import React from 'react';
import Search from './components/search/Search';
import List from './components/list/List';
import Pagination from './components/paginate/Pagination';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { Character } from './models/models';

// styles
import './App.css';
import LoadingSpinner from './components/loader/LoadingSpinner';

interface AppState {
    characters: Character[];
    query: string;
    page: number;
    error: string | null;
    totalPages: number;
    loading: boolean;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        const savedQuery = localStorage.getItem('searchQuery') || '';
        const savedPage = parseInt(localStorage.getItem('searchPage') || '1', 10);

        this.state = {
            characters: [],
            query: savedQuery,
            page: savedPage,
            error: null,
            totalPages: 1,
            loading: false,
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount(): void {
        if (this.state.query) {
            this.fetchCharacters(this.state.query, this.state.page);
        } else {
            this.fetchCharacters('', this.state.page);
        }
    }

    fetchCharacters(query: string, page: number): void {
        this.setState({ loading: true });
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
                this.setState({
                    characters: data.results,
                    error: null,
                    totalPages: data.info.pages,
                    loading: false,
                });
            })
            .catch((err) => {
                console.log(err.message);

                this.setState({
                    characters: [],
                    error: err.message,
                    loading: false,
                });
            });
    }

    handleSearch(query: string): void {
        localStorage.setItem('searchQuery', query);
        localStorage.setItem('searchPage', '1');
        this.setState({ query, page: 1, loading: true }, () => {
            this.fetchCharacters(this.state.query, 1);
        });
    }

    handlePageChange(newPage: number): void {
        localStorage.setItem('searchPage', newPage.toString());
        this.setState({ page: newPage, loading: true }, () => {
            this.fetchCharacters(this.state.query, this.state.page);
        });
    }

    render(): React.ReactNode {
        return (
            <>
                <header>
                    <h1>Characters</h1>
                    <Search onSearch={this.handleSearch} />
                </header>
                <main>
                    <ErrorBoundary>
                        {this.state.loading ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                {this.state.error ? (
                                    <div className='error-popup'>{this.state.error}</div>
                                ) : (
                                    <>
                                        <List characters={this.state.characters} />
                                        <Pagination
                                            currentPage={this.state.page}
                                            totalPages={this.state.totalPages}
                                            onPageChange={this.handlePageChange}
                                        />
                                    </>
                                )}
                            </>
                        )}
                    </ErrorBoundary>
                </main>
            </>
        );
    }
}

export default App;
