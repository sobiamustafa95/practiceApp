import React from "react";

const Validation = (firstName, lastName, email, username, password) => {
  let errors = {};

  if (!(firstName || lastName)) {
    errors.firstName = "Field must be filled.";
    errors.lastName = "Field must be filled.";
  } else if (
    (firstName.length || lastName.length) < 3 &&
    /\d\./.test(firstName || lastName)
  ) {
    errors.firstName =
      "Invalid name or name must be more than three charachters.";
    errors.lastName =
      "Invalid name or name must be more than three charachters.";
  }
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid.";
  }
  if (!username) {
    errors.username = "Username is required.";
  } else if (username.length >= 5) {
    errors.username = "username is invalid.";
  }
  if (!password) {
    errors.password = "Password is requird.";
  } else if (password.length < 8) {
    errors.password = "Password must be more than five charachters.";
  }
  return errors;
};

export default Validation;
