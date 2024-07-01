import "./styling/NotFound.css"
import { Link } from "react-router-dom"

export default function NotFound() {

    return (
        <div className="not-found-page-wrapper">
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link to=".." className="return-home-btn">Return to home</Link>
        </div>
    )
}