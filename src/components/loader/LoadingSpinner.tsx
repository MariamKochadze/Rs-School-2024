import React from 'react';

// styles
import './LoadingSpinner.css';

class LoadingSpinner extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='loader-container'>
                <div className='loader'></div>
            </div>
        );
    }
}

export default LoadingSpinner;
