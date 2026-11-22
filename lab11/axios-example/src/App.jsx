import React from "react";
import PersonList from "./components/PersonList";
import "bootstrap/dist/css/bootstrap.min.css";

// This is our main App component
// We import PersonList here to show users from API

function App() {
  return (
    <div>
      {/* Show the users list component */}
      <PersonList />
    </div>
  );
}

export default App;
