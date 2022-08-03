import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormFunc({ addContacts }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    const items = {
      name: name,
      address: address,
      phone: phone,
      id: Math.floor(Math.random() * 1000),
    };

    e.preventDefault();
    if (name === "" || address === "" || phone === "") return;

    addContacts(items);

    // clearing input
    setName("");
    setAddress("");
    setPhone("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone no.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone no."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormFunc;
