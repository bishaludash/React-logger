import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import LogItem from "./LogItem";
import Preloader from "../layouts/Preloader";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getlogs();
    //eslint-disable-next-line
  }, []);

  const getlogs = async () => {
    setLoading(true);
    const res = await axios.get("/logs");
    setLogs(res.data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <h4>System logger</h4>
      {logs.length == null || logs.length === 0 ? (
        <p>No logs to show</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </Fragment>
  );
};

export default Logs;
