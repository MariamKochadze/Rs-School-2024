import React from 'react';
import Button from '../button/Button'; // Adjust the path based on your project structure

import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className='pagination'>
            <Button
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Button
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
