import React from "react";
import fakeData from "../fakeData/fakeData";
import "./MyEventsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

const MyEventsCard = (props) => {
  const { event, date, _id } = props.eventDetails;
  const eventPhoto = fakeData.filter((myEvent) => myEvent.name === event);

  return (
    <div className='col-md-6'>
      <div className='regEvent-card'>
        <div className='regEvent-img'>
          {eventPhoto.map((cardImg) => {
            return <img src={cardImg.photo} alt='...' />;
          })}
        </div>
        <div className='regEvent-body'>
          <h5>{event}</h5>
          <h6>
            Date:{" "}
            <span className='text-info'>
              {new Date(date).toDateString("dd/MM/yyyy")}
            </span>
          </h6>
          <div className='deleteEvent-btn'>
            <button
              onClick={(e) => props.deleteEvent(e, _id)}
              className='btn btn-danger'
            >
              Quit Event&#160;&#160;{" "}
              <FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEventsCard;
