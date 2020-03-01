import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await axios.get("/techs");
    setTechs(res.data);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <Fragment>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Tech List</h4>
          {techs.length == null || techs.length === 0 ? (
            <p>No techs to show</p>
          ) : (
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default TechListModal;
