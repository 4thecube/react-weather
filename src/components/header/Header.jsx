import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

import "./Header.css";

const Header = ({ dates }) => {
  moment().format("dddd");
  const today = moment().format("dddd");
  const tomorrow = moment().add(1, "days").format("dddd");
  const theDayAfterTomorrow = moment().add(2, "days").format("dddd");
  const TwoDaysAfterTomorrow = moment().add(3, "days").format("dddd");
  const ThreeDaysAfterTomorrow = moment().add(4, "days").format("dddd");

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
