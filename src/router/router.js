import MainPageNot from '../pages/MainPageNot'
import MainPageAgr from '../pages/MainPageAgr'
import AuthPage from '../pages/AuthPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootNot from "../outlet/RootNot";
import RootAgr from "../outlet/RootAgr"
import ComboPage from '../pages/ComboPage';
import PizzaPage from '../pages/PizzaPage';
import BasketPage from '../pages/BasketPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNot />,
    children: [
      {
        path: '/',
        element: <MainPageNot />,
      },
      {
        path: 'auth',
        element: <AuthPage />
      },
    ]
  },
  {
    path: "/main",
    element: <RootAgr />,
    children: [
      {
        path: '/main',
        element: <MainPageAgr />,
      },
      {
        path: '/main/combo',
        element: <ComboPage />,
      },
      {
        path: '/main/pizza',
        element: <PizzaPage />,
      },
      {
        path: '/main/basket',
        element: <BasketPage />,
      }
    ]
  }
]);