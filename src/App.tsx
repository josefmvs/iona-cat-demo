import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CatDetail } from './components/CatDetail';
import { CatsBrowserPage } from './components/cats/CatsBrowserPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CatsBrowserPage />,
  },
  {
    path: "/cat/:id",
    element: <CatDetail />,
  },
]);

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
