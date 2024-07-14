import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/search/Search';

describe('Pagination component', () => {
    it('should render the title', () => {
        render(<Search onSearch={() => {}} />);

        const errorMessage = screen.getByText(`Search`);
        expect(errorMessage).toBeInTheDocument();
    });
});
