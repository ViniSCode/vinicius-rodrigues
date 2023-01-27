import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Loading } from './components/Loading';
import Home from './pages/home';
import './styles/global.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1500)
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: loading ? <Loading /> : <Home />,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
