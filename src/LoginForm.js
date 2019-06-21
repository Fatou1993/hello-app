import React from "react";

const LoginForm = props => {
  return (
    <form>
      <div>Welcome to the Hello App !</div>
      <label htmlFor="username">
        <span className="label">Username</span>
        <input
          id="username"
          type="text"
          value={props.username}
          onChange={props.handleUserNameChange}
          placeholder="Username"
          required
        />
      </label>
      <label htmlFor="password">
        <span className="label">Password</span>
        <input
          id="password"
          type="password"
          value={props.password}
          onChange={props.handlePasswordChange}
          placeholder="Password"
          required
        />
      </label>
      <label htmlFor="country-code">
        <span className="label">Country Code</span>
        <input
          id="country-code"
          type="country-code"
          value={props.lang.toUpperCase()}
          onChange={props.handleCountryCodeChange}
          placeholder="Country Code"
        />
      </label>
      <button onClick={props.saveUser}>Login</button>
    </form>
  );
};

export default LoginForm;
