import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme.css';
import './index.css';
import Home from './pages/home';
import Products from './pages/products';
import Product from './pages/product';
import NotFound from './pages/not-found';
import AnnouncementBar from './announcement-bar';
import Header from './header';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/collections/collection-1",
    element: <Products />,
  },
  {
    path: "/products/product-1",
    element: <Product />,
  },
  {
    path: "/*",
    element: <NotFound />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnnouncementBar />
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
