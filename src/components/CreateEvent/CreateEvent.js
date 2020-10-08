import {
  faCloudUploadAlt,
  faLayerGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CreateEvent.css";

const CreateEvent = () => {
  const history = useHistory();
  const [eventData, setEvenetData] = useState({
    name: "",
    description: "",
    date: "",
    img: "",
  });

  const handleBlur = (e) => {
    const newEvent = { ...eventData };
    newEvent[e.target.name] = e.target.value;
    setEvenetData(newEvent);
  };
  const handleCreateEvent = (e) => {
    fetch("http://localhost:4000/createEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      });

    e.preventDefault();
  };

  return (
    <div className='container'>
      <div className='sidenav'>
        <Link to='/admin' className='admin-menu'>
          <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
          &#160;Registered User
        </Link>
        <Link to='/createEvent' className='admin-menu'>
          <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
          &#160;Create Event
        </Link>
      </div>
      <div className='form-section'>
        <form className='create-form' onSubmit={handleCreateEvent}>
          <div className='d-flex'>
            <div className='form-left col-md-6'>
              <div>
                <label for='Event Name'>Event Name:</label>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div>
                <label for='Description'>Description:</label>
                <input
                  className='form-control'
                  type='text'
                  name='description'
                  onBlur={handleBlur}
                  required
                />
              </div>
            </div>
            <div className='form-right col-md-6'>
              <div>
                <label for='Date'>Date:</label>
                <input
                  className='form-control'
                  type='date'
                  name='date'
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className='mt-2'>
                <label for='file Upload'>
                  Upload Image{" "}
                  <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon>
                </label>
                <input
                  type='file'
                  className='form-control-file'
                  id=''
                  name='img'
                />
              </div>
            </div>
          </div>
          <div className='create-btn text-center mt-3'>
            <button className='btn-success' type='submit'>
              &#160;&#160;Create Event&#160;&#160;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
