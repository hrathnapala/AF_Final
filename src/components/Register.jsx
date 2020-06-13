import React, { Component } from "react";
import axios from "axios";
import Proxy from "../Proxy";
import { NotifyHandler, NotifyComponent } from "react-notification-component";
import View from "./View";
import Login from "./Login";
import disableBrowserBackButton from "disable-browser-back-navigation";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccessfull: false,
      isLogin: false,
    };
  }
  componentDidMount() {
    disableBrowserBackButton();
  }
  onSubmitHandle = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${Proxy}user/create`,
      data: this.state,
    })
      .then((res) => {
        NotifyHandler.add(
          `Employee Added Successfully`,
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
      })
      .catch(
        NotifyHandler.add(
          `Registration failed`,
          `Email is already registered`,
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
              isLogin: true,
            });
          },
          () => {
            this.setState({
              isLogin: true,
            });
          }
        )
      );
  };

  onChangeHandle = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
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
    } else if (this.state.isLogin === true) {
      return <Login />;
    }
    return (
      <div
        className="container"
        style={{
          marginTop: "30px",
          border: "3px solid #4d4d4d",
          borderRadius: "7px",
          padding: "45px",
          background: "#9aa899",
        }}
      >
        <form onSubmit={this.onSubmitHandle}>
          <div className="form-group">
            <label htmlFor="validationDefault01">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              onChange={this.onChangeHandle}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="validationDefault02">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              onChange={this.onChangeHandle}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="validationDefault03">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.onChangeHandle}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="validationDefault04">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.onChangeHandle}
              required
            />
          </div>
          <button className="btn btn-info btn-block" type="submit">
            Register
          </button>
        </form>
        <NotifyComponent />
      </div>
    );
  }
}
