import React from 'react';

interface Props {
    children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<Props> {
    state: {
        errorMessage: string;
    } = {
        errorMessage: '',
    };

    static getDerivedStateFromError(error: Error) {
        return { errorMessage: error.toString() };
    }

    componentDidCatch(error: Error) {
        console.error(error);
    }

    render() {
        if (this.state.errorMessage) {
            return <h1>{this.state.errorMessage}</h1>;
        }
        return this.props.children;
    }
}
