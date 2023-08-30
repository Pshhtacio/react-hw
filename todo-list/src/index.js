import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import HelpPage from './pages/HelpPage';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import TodoItemDetail from './components/TodoItemDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:<TodoList />
      },
      {
        path: "/done",
        element:<DoneList />
      },
      {
        path: "/done/:id",
        element:<TodoItemDetail />
      },
      {
        path: "/help",
        element: <HelpPage />
      },
    ]
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();