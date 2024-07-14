import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/paginate/Pagination';

describe('Pagination component', () => {
    it('should render the title', () => {
        render(
            <Pagination
                currentPage={1}
                totalPages={4}
                onPageChange={() => {}}
            />
        );

        const errorMessage = screen.getByText(`Page 1 of 4`);
        expect(errorMessage).toBeInTheDocument();
    });
});
