import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";

export default class Header extends TrackerReact(Component) {
  logOut() {
    Meteor.logout();
  }

  render() {
    let usrName = "";
    if (Meteor.user()) {
      usrName = "Вы вошли как " + Meteor.user().username;
    }

    if (!Meteor.userId()) {
      return (
        <header>
          <div className="login-area">
            You need to{" "}
            <button onClick={this.props.showLoginForm}>Login</button> or{" "}
            <button onClick={this.props.showRegisterForm}>Register</button>
          </div>
        </header>
      );
    }
    return (
      <header>
        <div className="login-area">
          {usrName} <button onClick={this.logOut.bind(this)}>Log-out</button>
        </div>
      </header>
    );
  }
}
