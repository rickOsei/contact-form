import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFunc from "./components/FormFunc";
import AllUsers from "./components/AllUsers";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [contact, setContact] = useState([]);

  const addContacts = (contacts) => {
    setContact((prev) => {
      return [...prev, contacts];
    });
  };

  const deleteContact = (id) => {
    setContact((prev) => prev.filter((item) => item.id !== id));
  };

  const editContact = (id, newDetails) => {
    setContact((prev) =>
      prev.map((item) => {
        if (item.id === id) return newDetails;
        return item;
      })
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <FormFunc addContacts={addContacts} />
        </Col>
        <Col>
          <AllUsers
            contact={contact}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
