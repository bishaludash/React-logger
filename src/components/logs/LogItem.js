import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={` modal-trigger ${log.attention ? "red-text" : "blue-blue"}`}
      >
        {log.message}
      </a>

      <div className="grey-text">
        <span className="black-text">ID {log.id}, last updated by </span>
        <span className="black-text">{log.tech} on </span>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default LogItem;
