import React, { Component } from "react";
import axios from "axios";
import { NotifyHandler, NotifyComponent } from "react-notification-component";
import View from "./View";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isSuccessfull: false,
    };
  }

  onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:3500/api/user/getDetails/${this.state.email}/${this.state.password}`
      )
      .then((res) => {
        if (res.data) {
          NotifyHandler.add(
            `Welcome ${res.data[0].firstname}`,
            `Click here to login`,
            {
              time: 1,
              animationDelay: 0.1,
              animationTimeFunc: "linear",
              hide: true,
              progress: true,
              position: "RT",
            },
            {
              width: 220,
              height: 54,
              mainBackground: "#16a085",
              mainBackgroundHover: "#1abc9c",
              mainBackgroundHoverTime: 0.2,
              //   styleMain: {},
              //   styleTitle: {},
              //   styleMessage: {},
              styleProgress: { background: "#2ecc71" },
            },
            () => {
              this.setState({
                isSuccessfull: true,
              });
            },
            () => {
              this.setState({
                isSuccessfull: true,
              });
            }
          );
        } else {
          NotifyHandler.add(
            `Login Failed`,
            ``,
            {
              time: 1,
              animationDelay: 0.1,
              animationTimeFunc: "linear",
              hide: true,
              progress: true,
              position: "RT",
            },
            {
              width: 220,
              height: 54,
              mainBackground: "#16a085",
              mainBackgroundHover: "#1abc9c",
              mainBackgroundHoverTime: 0.2,
              //   styleMain: {},
              //   styleTitle: {},
              //   styleMessage: {},
              styleProgress: { background: "#2ecc71" },
            },
            () => {
              this.setState({
                isSuccessfull: false,
              });
            },
            () => {
              this.setState({
                isSuccessfull: false,
              });
            }
          );
        }
      })
      .catch(() => alert("Error"));
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  componentWillUnmount() {
    this.setState({
      isSuccessfull: false,
    });
  }

  render() {
    if (this.state.isSuccessfull === true) {
      return <View />;
    }

    return (
      <div
        className="container"
        style={{
          marginTop: "30px",
          background: "#96b09c",
          border: "3px solid #4d4d4d",
          borderRadius: "7px",
          padding: "45px",
        }}
      >
        <form onSubmit={this.onSubmitHandle}>
          <div className="form-group">
            <label htmlFor="validationDefault03">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="validationDefault03">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.onChangePassword}
              required
            />
          </div>

          <button className="btn btn-danger btn-block" type="submit">
            Login
          </button>
        </form>

        <NotifyComponent />
      </div>
    );
  }
}
