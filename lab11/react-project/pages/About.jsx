import { useSearchParams } from "react-router-dom"

export default function About(){
    const [searchParams] = useSearchParams()
    const college = searchParams.get("college")

    return (
        <article>
            <h2>About</h2>
            <p>College: {college}</p>
        </article>
    )
}
