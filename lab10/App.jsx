/* 
Purpose: 
Define the top level component where we will later 
be able to inject other class and functional components into 
*/

import {useState } from "react";
//later import your class and functional components here
//into app 
import Student from "./Student";


function App() {
    const [showStudent, setShowStudent] = useState(true);

    //this return in App function component is returning 
    //from teh implicit render() method 
    return (
        <article>
            <h1>Week 10 - React Events and Lifecycle</h1>
            <button onClick={() => setShowStudent(!showStudent)}>
                {showStudent ? "Hide" : "Show"} Student Component
            </button>

            {showStudent && <Student studentId="1111111111"/>}

        </article>
    )
}

export default App;