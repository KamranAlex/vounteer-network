import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import fakeData from "../fakeData/fakeData";
import "./Register.css";

const Register = () => {
  const { id } = useParams();
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  const history = useHistory();
  const selectedEvent = fakeData.find((myEvent) => myEvent.id === parseInt(id));

  const [newRegistration, setNewRegistration] = useState({
    name: loggedInUser.name,
    email: loggedInUser.email,
    date: "",
    description: "",
    event: selectedEvent.name,
  });

  const handleBlur = (e) => {
    const registerdData = { ...newRegistration };
    registerdData[e.target.name] = e.target.value;
    setNewRegistration(registerdData);
  };

  const handleRegistration = (e) => {
    fetch("http://localhost:4000/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegistration),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push("/myEvents");
      });

    e.preventDefault();
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='container register-form'>
          <form action='' onSubmit={handleRegistration}>
            <div className='all-box'>
              <h1 className='text-center'>Register</h1>
              <div className='form-group'>
                <label for='Full Name'>Full Name:</label>
                <input
                  className='form-control'
                  type='text'
                  name='name'
                  value={loggedInUser.name}
                  required
                />
              </div>
              <div className='form-group'>
                <label for='Email'>Email:</label>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  value={loggedInUser.email}
                  required
                />
              </div>
              <div className='form-group'>
                <label for='Date'>Date:</label>
                <input
                  className='form-control'
                  type='date'
                  name='date'
                  id=''
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className='form-group'>
                <label for='Description'>Description:</label>
                <input
                  className='form-control'
                  type='text'
                  name='description'
                  id=''
                  onBlur={handleBlur}
                />
              </div>
              <div className='form-group'>
                <label for='Event to Vounteer'>Event to Register:</label>
                <input
                  className='form-control'
                  type='text'
                  name='event'
                  value={selectedEvent.name}
                  required
                />
              </div>

              <div className='text-center'>
                <button type='submit' className='btn btn-warning'>
                  Register This Event
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
