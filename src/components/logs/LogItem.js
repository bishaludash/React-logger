import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logAction";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
  };

  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={` modal-trigger ${log.attention ? "red-text" : "blue-blue"}`}
        onClick={() => setCurrent(log)}
      >
        {log.message}
      </a>

      <div className="grey-text">
        <span className="black-text">ID {log.id}, last updated by </span>
        <span className="black-text">{log.tech} on </span>
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
