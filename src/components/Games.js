import React, { Component } from "react";
import { NotifyHandler, NotifyComponent } from "react-notification-component";

export default class Games extends Component {

    message(name){
        NotifyHandler.add(
            `Purchase successfull`,
            `${name}`,
            {
              time: 3,
              animationDelay: 0.3,
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
    }

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem", marginTop: "10px" }}>
          <img className="card-img-top" src={this.props.location} alt={this.props.name}/>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.description}</p>            
            <button onClick={() => this.message(this.props.name)} type="button" class="btn btn-danger btn-lg btn-block">Purchase</button>
          </div>
        </div>
        <NotifyComponent />
      </div>
    );
  }
}
