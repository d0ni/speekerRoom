import React, { Component } from "react";
import moment from "moment";

import DayTimes from "./dayTimes.jsx";
import Header from "./header.jsx";
import AccountUI from "./accauntUI.jsx";

require("moment/locale/ru");

export default class App extends Component {
  state = {
    month: moment(),
    isPopup: false,
    popupType: 1
  };

  componentWillMount() {
    if (!JSON.parse(localStorage.getItem("events"))) {
      localStorage.setItem("events", JSON.stringify([]));
    }
  }

  setEvent = t => () => {};

  weekBack() {
    this.setState({ month: moment(this.state.month).add(-7, "days") });
  }

  weekNext() {
    this.setState({ month: moment(this.state.month).add(7, "days") });
  }

  showLoginForm = () => {
    this.setState({ isPopup: !this.state.isPopup });
    this.setState({ popupType: 1 });
  };

  showRegisterForm = () => {
    this.setState({ isPopup: !this.state.isPopup });
    this.setState({ popupType: 2 });
  };

  closePopup = () => {
    this.setState({ isPopup: !this.state.isPopup });
  };

  render() {
    const { month } = this.state;

    const dayShift = parseInt(moment(month).format("d"));

    return (
      <div className="main-container">
        <AccountUI
          statePopup={this.state.isPopup}
          typePopup={this.state.popupType}
          closePopup={this.closePopup}
        />
        <Header
          showLoginForm={this.showLoginForm}
          showRegisterForm={this.showRegisterForm}
        />
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
        <div className="div-room">
          <div className="room-name">
            <h3 className="room-color">Зеленая</h3>
            <h3 className="room-sum">(до 5 персон)</h3>
          </div>
          <DayTimes
            date={moment(month).add(1 - dayShift, "days")}
            room="green"
          />
          <DayTimes
            date={moment(month).add(2 - dayShift, "days")}
            room="green"
          />
          <DayTimes
            date={moment(month).add(3 - dayShift, "days")}
            room="green"
          />
          <DayTimes
            date={moment(month).add(4 - dayShift, "days")}
            room="green"
          />
          <DayTimes
            date={moment(month).add(5 - dayShift, "days")}
            room="green"
          />
        </div>

        <div className="div-room">
          <div className="room-name">
            <h3 className="room-color">Красная</h3>
            <h3 className="room-sum">(до 15 персон)</h3>
          </div>
          <DayTimes date={moment(month).add(1 - dayShift, "days")} room="red" />
          <DayTimes date={moment(month).add(2 - dayShift, "days")} room="red" />
          <DayTimes date={moment(month).add(3 - dayShift, "days")} room="red" />
          <DayTimes date={moment(month).add(4 - dayShift, "days")} room="red" />
          <DayTimes date={moment(month).add(5 - dayShift, "days")} room="red" />
        </div>

        <div className="div-room">
          <div className="room-name">
            <h3 className="room-color">Синяя</h3>
            <h3 className="room-sum">(до 25 персон)</h3>
          </div>
          <DayTimes
            date={moment(month).add(1 - dayShift, "days")}
            room="blue"
          />
          <DayTimes
            date={moment(month).add(2 - dayShift, "days")}
            room="blue"
          />
          <DayTimes
            date={moment(month).add(3 - dayShift, "days")}
            room="blue"
          />
          <DayTimes
            date={moment(month).add(4 - dayShift, "days")}
            room="blue"
          />
          <DayTimes
            date={moment(month).add(5 - dayShift, "days")}
            room="blue"
          />
        </div>

        <div className="div-room">
          <div className="room-name">
            <h3 className="room-color">Фиолетовая</h3>
            <h3 className="room-sum">(до 25 персон)</h3>
          </div>
          <DayTimes
            date={moment(month).add(1 - dayShift, "days")}
            room="purpure"
          />
          <DayTimes
            date={moment(month).add(2 - dayShift, "days")}
            room="purpure"
          />
          <DayTimes
            date={moment(month).add(3 - dayShift, "days")}
            room="purpure"
          />
          <DayTimes
            date={moment(month).add(4 - dayShift, "days")}
            room="purpure"
          />
          <DayTimes
            date={moment(month).add(5 - dayShift, "days")}
            room="purpure"
          />
        </div>
      </div>
    );
  }
}
