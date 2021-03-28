import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

import "./Header.css";

const Header = ({ dates }) => {
  const today = moment().isoWeekday(moment().date()).format("dddd");
  const tomorrow = moment()
    .isoWeekday(moment().add(1, "days").date())
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
        to={`/${moment(dates.tomorrow).date()}`}
        className="header__option"
        activeClassName="selected"
      >
        {tomorrow}
      </NavLink>
      <NavLink
        to={`/${moment(dates.theDayAfterTomorrow).date()}`}
        className="header__option"
        activeClassName="selected"
      >
        {theDayAfterTomorrow}
      </NavLink>
      <NavLink
        to={`/${moment(dates.twoDaysAfterTomorrow).date()}`}
        className="header__option"
        activeClassName="selected"
      >
        {TwoDaysAfterTomorrow}
      </NavLink>
      <NavLink
        to={`/${moment(dates.threeDaysAfterTomorrow).date()}`}
        className="header__option"
        activeClassName="selected"
      >
        {ThreeDaysAfterTomorrow}
      </NavLink>
    </div>
  );
};

export default Header;
