import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import moment from "moment";

export default class DayTimes extends Component {
  componentWillMount() {
    if (!JSON.parse(localStorage.getItem("events"))) {
      localStorage.setItem("events", JSON.stringify([]));
    }
  }

  timeClick = h => () => {
    this.props.date.hour(h);
    this.props.date.minute(0);
    this.props.date.second(0);

    const date = this.props.date.format("HH-DD-MM-YYYY");
    const arr = JSON.parse(localStorage.getItem("events"));

    if (arr.indexOf(date) == -1) {
      arr.push(date);
      localStorage.setItem("events", JSON.stringify(arr));
    }

    console.log(arr.indexOf(date));
  };

  isEvent(h) {
    this.props.date.hour(h);
    this.props.date.minute(0);
    this.props.date.second(0);

    const arr = JSON.parse(localStorage.getItem("events"));
    console.log(arr);
    console.log(arr.indexOf(this.props.date.format("HH-DD-MM-YYYY")));
    // arr.indexOf(this.props.date.format("HH-DD-MM-YYYY"));
    if (arr.indexOf(this.props.date.format("HH-DD-MM-YYYY")) >= 0) {
      return "eventOn";
    }
    return "eventOff";
  }

  render() {
    return (
      <div className="day-times">
        <p className="btn-line">
          <button
            className={"btn-time " + this.isEvent.bind(this, 9)}
            onClick={this.timeClick(9)}
          >
            9:00
          </button>
          <button className="btn-time" onClick={this.timeClick(14)}>
            14:00
          </button>
        </p>
        <p className="btn-line">
          <button className="btn-time" onClick={this.timeClick(10)}>
            10:00
          </button>
          <button className="btn-time" onClick={this.timeClick(15)}>
            15:00
          </button>
        </p>
        <p className="btn-line">
          <button className="btn-time" onClick={this.timeClick(11)}>
            11:00
          </button>
          <button className="btn-time" onClick={this.timeClick(16)}>
            16:00
          </button>
        </p>
        <p className="btn-line">
          <button className="btn-time" onClick={this.timeClick(12)}>
            12:00
          </button>
          <button className="btn-time" onClick={this.timeClick(17)}>
            17:00
          </button>
        </p>
        <p className="btn-line">
          <button className="btn-time" onClick={this.timeClick(13)}>
            13:00
          </button>
          <button className="btn-time" onClick={this.timeClick(18)}>
            18:00
          </button>
        </p>
      </div>
    );
  }
}
