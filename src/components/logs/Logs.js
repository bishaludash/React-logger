import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

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
    return <div>Loading ...</div>;
  }

  return (
    <Fragment>
      {logs.length == null || logs.length === 0 ? (
        <p>No logs to show</p>
      ) : (
        logs.map(log => <p key={log.id}>{log.message}</p>)
      )}
    </Fragment>
  );
};

export default Logs;
