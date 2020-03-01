import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onsubmit = e => {
    if (firstname === "" || lastname === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      console.log(firstname, lastname);
    }

    // clear fields
    setFirstname("");
    setLastname("");
  };
  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add Tech</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />

            <label htmlFor="message" className="active">
              First name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            />

            <label htmlFor="message" className="active">
              Last name
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onsubmit}
            className="modal-close waves-effect waves-green btn"
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal;
