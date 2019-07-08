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
      const index = arr.map(this.rtrnBook).indexOf(date);

      const confAdd = `Вы действительно хотите забронировать комнату на ${h}:00 часов в ${this.props.date.format(
        "dddd DD MMMM YYYY"
      )}?`;
      const confDel = `Вы действительно хотите отменить бронировку комнаты c ${h}:00 часов в ${this.props.date.format(
        "dddd DD MMMM YYYY"
      )}?`;

      if (!arr.map(this.rtrnBook).includes(date)) {
        if (confirm(confAdd)) {
          arr.push({
            book: date,
            userID: Meteor.userId()
          });
          localStorage.setItem("events", JSON.stringify(arr));
        }
      } else {
        if (arr[index].userID == Meteor.userId()) {
          if (confirm(confDel)) {
            arr.splice(index, 1);
            localStorage.setItem("events", JSON.stringify(arr));
          }
        } else {
          alert(
            "Снять бронь может только тот пользователь, который ее забронировал"
          );
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
        <div
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
          <p className="time-text">{" " + value[0] + ":00"}</p>
          <img
            src="icons/add.svg"
            width="18px"
            hidden={
              arr.map(this.rtrnBook).includes(value[0] + dmy) ? true : false
            }
          />
        </div>
        <div
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
          <p className="time-text">{" " + value[1] + ":00"}</p>
          <img
            src="icons/add.svg"
            width="18px"
            hidden={
              arr.map(this.rtrnBook).includes(value[1] + dmy) ? true : false
            }
          />
        </div>
      </p>
    );
  };

  render() {
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
