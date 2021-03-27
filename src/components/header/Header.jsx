import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

import "./Header.css";

const Header = ({ getDate }) => {
  console.log(moment().locale());
  const today = moment().isoWeekday(moment()._d.getDay()).format("dddd");
  const tomorrow = moment()
    .isoWeekday(moment().add(1, "days")._d.getDay())
    .format("dddd");
  const theDayAfterTomorrow = moment()
    .isoWeekday(moment().add(2, "days")._d.getDay())
    .format("dddd");
  const TwoDaysAfterTomorrow = moment()
    .isoWeekday(moment().add(3, "days")._d.getDay())
    .format("dddd");
  const ThreeDaysAfterTomorrow = moment()
    .isoWeekday(moment().add(4, "days")._d.getDay())
    .format("dddd");
  return (
    <div className="header">
      <NavLink
        to={`/`}
        exact
        className="header__option"
        activeClassName="selected"
      >
        {today}
      </NavLink>
      <NavLink
        to={`/${getDate + 1}`}
        className="header__option"
        activeClassName="selected"
      >
        {tomorrow}
      </NavLink>
      <NavLink
        to={`/${getDate + 2}`}
        className="header__option"
        activeClassName="selected"
      >
        {theDayAfterTomorrow}
      </NavLink>
      <NavLink
        to={`/${getDate + 3}`}
        className="header__option"
        activeClassName="selected"
      >
        {TwoDaysAfterTomorrow}
      </NavLink>
      <NavLink
        to={`/${getDate + 4}`}
        className="header__option"
        activeClassName="selected"
      >
        {ThreeDaysAfterTomorrow}
      </NavLink>
    </div>
  );
};

export default Header;
