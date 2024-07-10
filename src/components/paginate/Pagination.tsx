import React from 'react';

// styles
import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

class Pagination extends React.Component<PaginationProps> {
    handlePrevious = () => {
        const { currentPage, onPageChange } = this.props;
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    handleNext = () => {
        const { currentPage, totalPages, onPageChange } = this.props;
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    render(): React.ReactNode {
        const { currentPage, totalPages } = this.props;
        return (
            <div className='pagination'>
                <button
                    onClick={this.handlePrevious}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={this.handleNext}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        );
    }
}

export default Pagination;
