import React, { useState } from "react";
import KandyManager from "../../modules/KandyManager";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  console.log(credentials);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const checkUsername = () => {
    KandyManager.getEmployees().then((employees) =>
      employees.find(credentials.username)
    );
  };

  const handleLogin = (event) => {
    event.preventDefault();
    props.setUser(credentials);
    props.history.push("/products");
  };

  return (
    <>
      <h1>Ma Houchens' Kandy Kounter</h1>
      <form onSubmit={handleLogin}>
        <fieldset>
          <h3>Sign in, Sweetie!</h3>
          <div className="formgrid">
            <label htmlFor="inputUsername">Username: </label>
            <input
              onChange={handleFieldChange}
              type="text"
              id="username"
              placeholder="Username"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputPassword">Password: </label>
            <input
              onChange={handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
