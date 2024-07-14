import React from 'react';

export default class ErrorButton extends React.Component {
    state: {
        errorActivated: boolean;
    } = {
        errorActivated: false,
    };

    handleClick = () => {
        this.setState({
            errorActivated: true,
        });
    };

    render() {
        if (this.state.errorActivated) throw new Error('Test Error shown by ErrorBoundary.');
        return (
            <button
                type='button'
                onClick={this.handleClick}
            >
                Error Button
            </button>
        );
    }
}
