import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const authenticated =
    JSON.parse(localStorage?.getItem("isLoggedIn")) ||
    localStorage.setItem("isLoggedIn", false);
  const location = useLocation();

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        from: location.pathname,
        message: "You must be signed in to access this page...",
      }}
    />
  );
}
