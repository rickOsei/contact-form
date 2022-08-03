import React from "react";
import User from "./User";

function AllUsers({ contact, deleteContact, editContact }) {
  return (
    <>
      {contact.map((item) => {
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
