import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { getUserLocation } from "./getUserLocation";
import LoginForm from "./LoginForm";
import UserInfos from "./UserInfos";

class App extends React.Component {
  state = {
    lang: "" || "en",
    username: sessionStorage.getItem("hello-app-user") || "",
    password: "",
    isLoggedIn: sessionStorage.getItem("hello-app-user") ? true : false,
    displayBye: false,
    userInfos: {}
  };
  handleUserNameChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleCountryCodeChange = e => {
    const countryCode = e.target.value.toLowerCase().trim();
    this.setState({
      lang: countryCode
    });
  };
  saveUser = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      sessionStorage.setItem("hello-app-user", username);
      this.setState({
        isLoggedIn: true
      });
    } else {
      const alertMessage = username ? "Enter a password" : "Enter a user name";
      alert(alertMessage);
    }
  };
  logout = () => {
    sessionStorage.clear("hello-app-user");
    this.setState({
      displayBye: true,
      isLoggedIn: false,
      password: ""
    });
  };
  componentDidMount() {
    getUserLocation().then(userLocation => {
      const { countryCode } = userLocation;
      this.setState({
        lang: countryCode.toLowerCase(),
        userInfos: userLocation
      });
    });
  }
  render() {
    const {
      username,
      password,
      isLoggedIn,
      lang,
      displayBye,
      userInfos
    } = this.state;
    return (
      <div className="container">
        {isLoggedIn ? (
          <React.Fragment>
            <h1>
              <Hello lang={lang} /> {username}, <br />
              you have successfully logged in!
            </h1>
            <UserInfos {...userInfos} username={username} />
            <button className="logout-button" onClick={this.logout}>
              Logout
            </button>
          </React.Fragment>
        ) : displayBye ? (
          <React.Fragment>
            <h1>Have a great day {username}!</h1>
            <button
              className="login-button"
              onClick={() => {
                this.setState({ displayBye: false });
              }}
            >
              Login
            </button>
          </React.Fragment>
        ) : (
          <LoginForm
            username={username}
            password={password}
            lang={lang}
            handleUserNameChange={this.handleUserNameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleCountryCodeChange={this.handleCountryCodeChange}
            saveUser={this.saveUser}
          />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
