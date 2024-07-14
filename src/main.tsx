import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import NotFound from './components/notFound/NotFound.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
