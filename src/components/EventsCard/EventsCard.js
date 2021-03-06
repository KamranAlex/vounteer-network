import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./EventCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const EventsCard = (props) => {
  const eventInfo = props.singleEvent;
  const history = useHistory();
  const handleJoinEvent = (id) => {
    history.push(`/register/${id}`);
  };
  return (
    <div className='col-md-3'>
      <div className='card event-card mt-4'>
        <img src={eventInfo.photo} className='card-img-top' alt='...' />
        <button
          onClick={() => {
            handleJoinEvent(eventInfo.id);
          }}
          className='btn btn-success btn-join'
        >
          <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
          &#160;&#160;{eventInfo.name}
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
