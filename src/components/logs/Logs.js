import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LogItem from "./LogItem";
import Preloader from "../layouts/Preloader";
import { getLogs } from "../../actions/logAction";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  // const getlogs = async () => {
  //   setLoading(true);
  //   const res = await axios.get("/logs");
  //   setLogs(res.data);
  //   setLoading(false);
  // };

  if (loading || logs === null) {
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

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
