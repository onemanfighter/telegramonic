import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import { lazy } from "react";
import LazyComponentProvider from "../component/LazyProvider/LazyLoadingProvider";

const MainPage = lazy(() => import("../pages/MainAppPage/MainPage"));

export const appRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="home"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="channels"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="groups"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="stickers"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="bots"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="blogs"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="themes"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
      <Route
        path="games"
        element={
          <LazyComponentProvider>
            <MainPage />
          </LazyComponentProvider>
        }
      />
    </Route>
  )
);
