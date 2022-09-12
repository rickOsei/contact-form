import React from "react";
import User from "./User";
import { useSelector } from "react-redux";
import { selectContacts } from "../reducers/contactReducer";

function AllUsers({ contact, deleteContact, editContact }) {
  const contacts = useSelector(selectContacts);

  console.log(contacts);
  return (
    <>
      {contacts.map((item) => {
        return (
          <User
            key={item.id}
            item={item}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        );
      })}
    </>
  );
}

export default AllUsers;
