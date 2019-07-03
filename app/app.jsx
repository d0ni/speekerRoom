import React, { Component } from "react";
import moment from "moment";

import DayTimes from "./dayTimes.jsx";

require("moment/locale/ru");

export default class App extends Component {
  state = {
    month: moment()
  };

  weekBack() {
    this.setState({ month: moment(this.state.month).add(-7, "days") });
  }

  weekNext() {
    this.setState({ month: moment(this.state.month).add(7, "days") });
  }

  render() {
    const { month } = this.state;

    const dayShift = parseInt(moment(month).format("d"));

    console.log(
      moment(month)
        .add(20 - dayShift, "days")
        .format("D")
    );

    return (
      <div className="main-container">
        <h1>Бронирование переговорок</h1>
        <div className="header">
          <h3 className="room">Комната</h3>
          <div className="caledrar-wrapper">
            <div className="month">
              <button
                className="bnt-change-date"
                onClick={this.weekBack.bind(this)}
              >
                left
              </button>
              <h2 className="curent-month">{moment(month).format("MMMM")}</h2>
              <button
                className="bnt-change-date"
                onClick={this.weekNext.bind(this)}
              >
                right
              </button>
            </div>
            <div className="week-days">
              <div className="days">
                {moment(month)
                  .add(1 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(2 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(3 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(4 - dayShift, "days")
                  .format("DD dddd")}
              </div>
              <div className="days">
                {moment(month)
                  .add(5 - dayShift, "days")
                  .format("DD dddd")}
              </div>
            </div>
          </div>
        </div>
        <div className="green-room">
          <div className="room-name">
            <h3 className="room-color">Зеленая</h3>
            <h3 className="room-sum">(до 5 персон)</h3>
          </div>
          <DayTimes
            date={parseInt(
              moment(month)
                .add(1 - dayShift, "days")
                .format("D")
            )}
          />
          <DayTimes
            date={parseInt(
              moment(month)
                .add(2 - dayShift, "days")
                .format("D")
            )}
          />
          <DayTimes
            date={parseInt(
              moment(month)
                .add(3 - dayShift, "days")
                .format("D")
            )}
          />
          <DayTimes
            date={parseInt(
              moment(month)
                .add(4 - dayShift, "days")
                .format("D")
            )}
          />
          <DayTimes
            date={parseInt(
              moment(month)
                .add(5 - dayShift, "days")
                .format("D")
            )}
          />
        </div>
      </div>
    );
  }
}
