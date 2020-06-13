import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div
          className="container"
          style={{
            margin: "0 250px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="card"
            style={{
              width: "35rem",
              marginTop: "20px",
              textAlign: "center",
              border: "5px solid black",
              borderRadius: "7px",
              padding: "5px",
            }}
          >
            <img
              className="card-img-top"
              src="/assets/cod.png"
              alt="AF Gaming"
            />
            <div className="card-body">
              <h5 className="card-title">Welcome to AF online gaming site</h5>
              <p className="card-text">
                You can have good knowledge about newly released games from this
                site. hope you will enjoy.Before that you have to log in.If you
                are not a member of AF gaming site please register. Thank you!
              </p>
              <Link className="nav-link" to="/login">
                <button type="button" class="btn btn-success">
                  LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
