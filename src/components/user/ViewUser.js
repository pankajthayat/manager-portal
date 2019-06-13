import React from "react";
import User from "./User";

export default ({ users, deleteUser, editUser }) => {
  return users.map((user, index) => (
    <User key = {index} user={user} deleteUser={deleteUser} editUser={editUser} />
  ));
};
