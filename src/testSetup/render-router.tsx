import { ThemeProvider } from '@contexts/themeProvider';
import { store } from '@store/store';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

// export const renderWithRouter = (ui: ReactNode, { route = '/' } = {}) => {
//   window.history.pushState({}, 'Test page', route);

//   return render(
//     <Provider store={store}>
//       <ThemeProvider>
//         <MemoryRouter initialEntries={[route]}>
//           <Routes>
//             <Route path="/" element={ui} />
//           </Routes>
//         </MemoryRouter>
//       </ThemeProvider>
//     </Provider>
//   );
// };

export const renderWithRouter = (ui: ReactNode, { route = '/', path = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(
    <Provider store={store}>
      <ThemeProvider>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={path} element={ui} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};
