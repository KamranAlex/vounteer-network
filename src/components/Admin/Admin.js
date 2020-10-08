import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faTrashAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allUser")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
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
          e.target.parentNode.parentNode.parentNode.parentNode.style.display =
            "none";
        }
      });
  };
  return (
    <div className='container d-flex'>
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
      <div className='user-list'>
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Registration Date</th>
              <th scope='col'>Vounteer Events</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          {users.map((userInfo) => {
            return (
              <tbody>
                <tr>
                  <th scope='row' style={{ color: "#018869" }}>
                    {userInfo.name}
                  </th>
                  <td>{userInfo.email}</td>
                  <td>{userInfo.date}</td>
                  <td>{userInfo.event}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={(e) => deleteEvent(e, userInfo._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Admin;
