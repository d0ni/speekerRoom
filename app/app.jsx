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

  daysBlock = value => {
    const { month } = this.state;
    const dayShift = parseInt(moment(month).format("d"));

    return (
      <div key={Math.random()} className="days">
        {moment(month)
          .add(value - dayShift, "days")
          .format("DD dddd")}
      </div>
    );
  };

  roomsBlock = value => {
    const { month } = this.state;
    const dayShift = parseInt(moment(month).format("d"));

    return (
      <div key={Math.random()} className="div-room">
        <div className="room-name">
          <h3 className="room-color">{value[0]}</h3>
          <h3 className="room-sum">{`(до ${value[1]} персон)`}</h3>
        </div>
        <DayTimes
          date={moment(month).add(1 - dayShift, "days")}
          room={value[2]}
        />
        <DayTimes
          date={moment(month).add(2 - dayShift, "days")}
          room={value[2]}
        />
        <DayTimes
          date={moment(month).add(3 - dayShift, "days")}
          room={value[2]}
        />
        <DayTimes
          date={moment(month).add(4 - dayShift, "days")}
          room={value[2]}
        />
        <DayTimes
          date={moment(month).add(5 - dayShift, "days")}
          room={value[2]}
        />
      </div>
    );
  };

  render() {
    const { month } = this.state;
    const daysArr = [1, 2, 3, 4, 5];
    const roomsArr = [
      ["Зелёная", "5", "green"],
      ["Красная", "15", "red"],
      ["Синяя", "25", "blue"],
      ["Фиолетовая", "25", "purpure"]
    ];

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
              <img
                className="bnt-change-date"
                src="icons/arrow_back.svg"
                onClick={this.weekBack.bind(this)}
                onMouseEnter={() => {
                  document.body.style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                  document.body.style.cursor = "default";
                }}
              />
              <h2 className="curent-month">{moment(month).format("MMMM")}</h2>
              <img
                className="bnt-change-date"
                src="icons/arrow_forward.svg"
                onClick={this.weekNext.bind(this)}
                onMouseEnter={() => {
                  document.body.style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                  document.body.style.cursor = "default";
                }}
              />
            </div>
            <div className="week-days">{daysArr.map(this.daysBlock)}</div>
          </div>
        </div>
        {roomsArr.map(this.roomsBlock)}
      </div>
    );
  }
}
