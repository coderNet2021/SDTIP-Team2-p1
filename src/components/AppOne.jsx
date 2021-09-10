import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppOnecss.css";

import axios from "axios";

class AppOne extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmitLili = this.onSubmitLili.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmitLili(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    //send the registered to the backend
    axios
      .post("http://localhost:4230/app/signup", registered)
      .then((response) => console.log(response.data));

    //window.location(./home);

    this.setState({
      fullName: "",
      username: "",
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container register-form">
          <div className="form">
            <div className="note">
              <p>Kidzi SDTIP TEAM 2</p>
            </div>
            <form onSubmit={this.onSubmitLili}>
              <div className="form-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        onChange={this.changeFullName}
                        value={this.state.fullName}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="username *"
                        onChange={this.changeUsername}
                        value={this.state.username}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your E-mail *"
                        onChange={this.changeEmail}
                        value={this.state.email}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Confirm Password *"
                        onChange={this.changePassword}
                        value={this.state.password}
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  className="btn btnSubmit col-md-12 mb-3"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppOne;
