import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const MyEvents = () => {
  const [regEvents, setRegEvents] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/myEvents?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setRegEvents(data);
      });
  }, []);

  const deleteEvent = (e, id) => {
    e.persist();
    fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          e.target.parentNode.parentNode.parentNode.style.display = "none";
        }
      });
  };

  return (
    <div className='container'>
      {loggedInUser.email ? (
        <div className='container'>
          <h3 className='text-center mt-2 mb-2'>
            You have Registerd for{" "}
            <span className='text-warning'> {regEvents.length} </span> Events
          </h3>
          <div className='row'>
            {regEvents.map((evt) => {
              return (
                <div className='col-md-4'>
                  <div className='card mt-2'>
                    <div className='card-body'>
                      <h5>{evt.event}</h5>
                      <div>
                        <h6>
                          Registerd From:{" "}
                          <span className='text-primary'>
                            {new Date(evt.date).toDateString("dd/MM/yyyy")}
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <button
                        onClick={(e) => deleteEvent(e, evt._id)}
                        className='btn btn-danger'
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='row d-flex text-center justify-content-center align-items-center'>
          <div className='mt-5'>
            <h1 className='text-danger mt-5'>You are not logged in.</h1>
            <h4 className=' mt-2'>
              Click to{" "}
              <span className='text-warning' style={{ fontWeight: "bold" }}>
                <Link to='/login' className='text-warning'>
                  Log In
                </Link>
              </span>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEvents;
