import React, { ChangeEvent, FormEvent } from 'react';

// styles
import './Search.css';

interface SearchProps {
    onSearch: (query: string) => void;
}

interface SearchState {
    query: string;
}

class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);

        const savedQuery = localStorage.getItem('searchQuery') || '';

        this.state = {
            query: savedQuery,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ query: event.target.value });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        localStorage.setItem('searchQuery', this.state.query);
        this.props.onSearch(this.state.query.toLocaleLowerCase().trim());
    }

    render(): React.ReactNode {
        return (
            <div className='serach-form-container'>
                <form
                    className='search-form'
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type='text'
                        placeholder='Search characters'
                        value={this.state.query}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        );
    }
}
export default Search;
