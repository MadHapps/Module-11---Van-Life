import "./styling/Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <nav>
            <h1 role="banner" className="logo">
                #VANLIFE
            </h1>
            <div className="link-wrapper">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}