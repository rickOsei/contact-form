import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFunc from "./components/FormFunc";
import AllUsers from "./components/AllUsers";
import { Container, Row, Col } from "react-bootstrap";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addUsers } from "./reducers/contactReducer";
import { db } from "./components/firebase/config";

function App() {
  const [contact, setContact] = useState([]);

  // const addContacts = (contacts) => {
  //   setContact((prev) => {
  //     return [...prev, contacts];
  //   });
  // };

  // const deleteContact = (id) => {
  //   setContact((prev) => prev.filter((item) => item.id !== id));
  // };

  // const editContact = (id, newDetails) => {
  //   setContact((prev) =>
  //     prev.map((item) => {
  //       if (item.id === id) return newDetails;
  //       return item;

  //     })
  //   );
  // };

  const dispatch = useDispatch();
  useEffect(() => {
    const newUsers = async () => {
      const q = query(collection(db, "contacts"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newUsersArr = [];
        querySnapshot.forEach((doc) => {
          newUsersArr.push(doc.data());
        });
        console.log(newUsersArr);
        dispatch(addUsers(newUsersArr));
      });
    };

    newUsers();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <FormFunc />
        </Col>
        <Col>
          <AllUsers />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
