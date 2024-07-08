import { Navigate, Outlet } from "react-router-dom"

export default function AuthRequired() {
    const authenticated = false

    return authenticated
        ? <Outlet />
        : <Navigate to="/login" state={{ message: "You must be signed in to access this page..." }} />
}