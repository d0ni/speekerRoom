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

  render() {
    const arr = JSON.parse(localStorage.getItem("events"));
    const dmy = this.props.date.format("-DD-MM-YYYY") + "-" + this.props.room;

    return (
      <div className="day-times">
        <p className="btn-line">
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("09" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("09")}
          >
            09:00
          </button>
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("14" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("14")}
          >
            14:00
          </button>
        </p>
        <p className="btn-line">
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("10" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("10")}
          >
            10:00
          </button>
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("15" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("15")}
          >
            15:00
          </button>
        </p>
        <p className="btn-line">
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("11" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("11")}
          >
            11:00
          </button>
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("16" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("16")}
          >
            16:00
          </button>
        </p>
        <p className="btn-line">
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("12" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("12")}
          >
            12:00
          </button>
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("17" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("17")}
          >
            17:00
          </button>
        </p>
        <p className="btn-line">
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("13" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("13")}
          >
            13:00
          </button>
          <button
            className={
              "btn-time " +
              [
                arr.map(this.rtrnBook).includes("18" + dmy)
                  ? "eventOn"
                  : "eventOff"
              ]
            }
            onClick={this.timeClick("18")}
          >
            18:00
          </button>
        </p>
      </div>
    );
  }
}
