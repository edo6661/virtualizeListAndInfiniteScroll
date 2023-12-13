import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/Provider';
import './index.css';
import Home from './pages/Home';
import Planet from './pages/Planet';
import WishlistPlanets from './pages/WishlistPlanets';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route element={<Planet />} path={`planet/:id/:created`} />
        <Route element={<WishlistPlanets />} path={`wishlist`} />
      </Route>
    </>
  )
)

const client = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={client}>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
