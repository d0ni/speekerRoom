import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import moment from "moment";

export default class DayTimes extends Component {
  rtrnBook = value => {
    return value.book;
  };

  timeClick = h => () => {
    if (Meteor.userId()) {
      const arr = JSON.parse(localStorage.getItem("events"));
      const date =
        h + this.props.date.format("-DD-MM-YYYY") + "-" + this.props.room;

      const obj = {
        book: date,
        userID: Meteor.userId()
      };

      if (!arr.map(this.rtrnBook).includes(date)) {
        if (
          confirm(`Вы действительно хотите забронировать комнату в ${h}:00?`)
        ) {
          arr.push(obj);
          localStorage.setItem("events", JSON.stringify(arr));
        }
      } else {
        const index = arr.map(this.rtrnBook).indexOf(date);

        if (arr[index].userID == Meteor.userId()) {
          if (
            confirm(
              `Вы действительно хотите снять бронировку комнаты c ${h}:00?`
            )
          ) {
            arr.splice(index, 1);
            localStorage.setItem("events", JSON.stringify(arr));
          }
        } else {
          alert("Снять бронь может только пользователь, который забронировал");
        }
      }
      this.setState({ x: Math.random() });
    } else {
      alert("Вы должны войти в систему или зарегистрироваться");
    }
  };

  block = value => {
    const arr = JSON.parse(localStorage.getItem("events"));
    const dmy = this.props.date.format("-DD-MM-YYYY") + "-" + this.props.room;

    return (
      <p key={Math.random()} className="btn-line">
        <button
          className={
            "btn-time " +
            [
              arr.map(this.rtrnBook).includes(value[0] + dmy)
                ? "eventOn"
                : "eventOff"
            ]
          }
          onClick={this.timeClick(value[0])}
        >
          {value[0] + ":00"}
        </button>
        <button
          className={
            "btn-time " +
            [
              arr.map(this.rtrnBook).includes(value[1] + dmy)
                ? "eventOn"
                : "eventOff"
            ]
          }
          onClick={this.timeClick(value[1])}
        >
          {value[1] + ":00"}
        </button>
      </p>
    );
  };

  render() {
    const arr = JSON.parse(localStorage.getItem("events"));
    const dmy = this.props.date.format("-DD-MM-YYYY") + "-" + this.props.room;
    const timeArr = [
      ["09", "14"],
      ["10", "15"],
      ["11", "16"],
      ["12", "17"],
      ["13", "18"]
    ];

    return <div className="day-times">{timeArr.map(this.block)}</div>;
  }
}
