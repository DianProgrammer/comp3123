import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <article>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Go back Home</Link>
        </article>
    )
}
