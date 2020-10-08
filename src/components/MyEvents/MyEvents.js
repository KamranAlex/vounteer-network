import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import MyEventsCard from "../MyEventsCard/MyEventsCard";

const MyEvents = () => {
  const [regEvents, setRegEvents] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://aqueous-atoll-91889.herokuapp.com/myEvents?email=" +
        loggedInUser.email,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRegEvents(data);
      });
  }, []);

  const deleteEvent = (e, id) => {
    e.persist();
    fetch(`https://aqueous-atoll-91889.herokuapp.com/delete/${id}`, {
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
    <div className='container'>
      {loggedInUser.email && (
        <div className='container'>
          <h3 className='text-center mt-2 mb-3'>
            You have Registerd for{" "}
            <span className='text-warning'> {regEvents.length} </span> Events
          </h3>
          <div className='row'>
            {regEvents.map((evt) => {
              return (
                <MyEventsCard
                  eventDetails={evt}
                  deleteEvent={deleteEvent}
                ></MyEventsCard>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEvents;
