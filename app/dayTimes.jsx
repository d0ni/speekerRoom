import React, { Component } from "react";

export default class DayTimes extends Component {
  addEvent = ({ start, end }) => {
    if (Meteor.userId()) {
      if (
        confirm(
          `Вы действительно хотите забронировать комнату на выбранное время?`
        )
      ) {
        const title = Meteor.user().username;
        const room = document.location.pathname;
        Meteor.call("addEvent", title, start, end, room);
      }
    } else {
      alert("Вы должны войти в систему или зарегистрироваться");
    }
  };

  timeClick() {
    console.log("date is " + props.date);
  }

  render() {
    return (
      <div className="day-times">
        <p className="btn-line">
          <button className="btn-time" onClick={this.timeClick}>
            9:00
          </button>
          <button className="btn-time">14:00</button>
        </p>
        <p className="btn-line">
          <button className="btn-time">10:00</button>
          <button className="btn-time">15:00</button>
        </p>
        <p className="btn-line">
          <button className="btn-time">11:00</button>
          <button className="btn-time">16:00</button>
        </p>
        <p className="btn-line">
          <button className="btn-time">12:00</button>
          <button className="btn-time">17:00</button>
        </p>
        <p className="btn-line">
          <button className="btn-time">13:00</button>
          <button className="btn-time">18:00</button>
        </p>
      </div>
    );
  }
}
