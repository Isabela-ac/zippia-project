import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Jobs from './pages/Jobs.jsx';
import Error from './pages/Error.jsx';
import ContextProvider from "./context/Provider.js";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/test/jobs" />
    },
    {
      path: '/test/jobs',
      element: <Jobs />,
    },
    {
      path: '*',
      element: <Error />,
    }
  ]);
  // Since it was asked to only have the page "/test/jobs" I did this redirect with Navigate
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;