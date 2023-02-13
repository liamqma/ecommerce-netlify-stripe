import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Cookies from 'js-cookie'
import './theme.css';
import './index.css';
import Home from './pages/home';
import Products from './pages/products';
import Product from './pages/product';
import NotFound from './pages/not-found';
import Cart from './pages/cart';
import { useCart } from './hooks/cart';
import AnnouncementBar from './announcement-bar';
import Header from './header';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const PersistCart = () => {
  const [{ items }] = useCart();
  useEffect(() => {
    Cookies.set('items', JSON.stringify(items));
  }, [items])
  return null;
}

const Layout = () =>
  <>
    <AnnouncementBar />
    <Header />
    <Outlet />
    <Footer />
    <PersistCart />
  </>

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: "/collections/collection-1",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
        errorElement: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/*",
        element: <NotFound />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
