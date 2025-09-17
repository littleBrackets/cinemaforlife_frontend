import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import PeoplePage from "./pages/PeoplePage";
import PersonDetailsPage from "./pages/PersonDetailsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

export default function App() {

  const isAuthorised = useSelector(state => state.user.isAuthorised);

  function PrivateRoute() {
    return isAuthorised ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonDetailsPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}
