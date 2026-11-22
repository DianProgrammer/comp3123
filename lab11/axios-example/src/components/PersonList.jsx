import React, { Component } from "react";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";

// This component is for getting users from API
// We use axios to get the data and show users information
class PersonList extends Component {

  // Define state default values
  state = {
    persons: []
  };

  // This function run when component is loaded
  // We get 10 random users from API
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10")
      .then(res => {
        console.log(res.data);

        // Get users from API result
        const persons = res.data.results;

        // Save users inside state
        this.setState({ persons });
      })
      .catch(error => {
        // If API have problem we show error in console
        console.log("Error getting users:", error);
      });
  }

  render() {
    return (
      <Container className="mt-4">

        {/* This is the title of our user list */}
        <h2 className="text-center bg-success text-white p-3">
          User List
        </h2>

        {/* We use map to show all users from API */}
        {this.state.persons.map((person) => (
          <Card
            key={person.login.uuid}
            className="mb-3 bg-info"
          >
            <Card.Body>

              {/* Show user picture */}
              <img
                src={person.picture.large}
                alt="User"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%"
                }}
              />

              {/* Show user information */}
              <p>First Name: {person.name.first}</p>
              <p>Last Name: {person.name.last}</p>
              <p>Gender: {person.gender}</p>
              <p>Email: {person.email}</p>
              <p>Phone: {person.phone}</p>
              <p>City: {person.location.city}</p>
              <p>Country: {person.location.country}</p>

              {/* This button is for user details */}
              <Button variant="primary">
                Details
              </Button>

            </Card.Body>
          </Card>
        ))}

      </Container>
    );
  }
}

export default PersonList;
