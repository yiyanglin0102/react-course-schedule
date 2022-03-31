import React from "react";
import "./App.css";

class Subsection extends React.Component {
  getTimes() {
    let subsectionTimes = this.props.data.time;

    const times = Object.keys(subsectionTimes).map((day) => {
      return (
        <li key={day}>
          {day}: {subsectionTimes[day]}
        </li>
      );
    });

    return times;
  }

  render() {
    let course = this.props.courseKey;
    let section = this.props.sectionKey;
    let subsection = this.props.data.number;
    let location = this.props.data.location;
    let listKey = [course, section, subsection].join("-");

    return (
      <div>
        <ul>
          <li  style={{ listStyleType: "none", fontSize: "20px", color: "#CE1212", fontWeight: "bold"}} key={listKey}>{subsection}</li>
          <ul key={subsection}>
            <li key={location} style={{ listStyleType: "none" }}>{location}</li>
            <li  style={{ listStyleType: "none" }}>Meeting Times</li>
            <ul  style={{ listStyleType: "none" }}>{this.getTimes()}</ul>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Subsection;
