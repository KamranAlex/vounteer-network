import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";

const CreatedEventCard = (props) => {
  const newEventInfo = props.newCreatedEvent;
  const history = useHistory();
  const handleJoinEvent = (id) => {
    history.push(`/register/${id}`);
  };

  return (
    <div className='col-md-3'>
      <div className='card event-card mt-4'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3RcPqetZMxRhAdfp6tD2lxDrIKTlewNHp4g&usqp=CAU'
          alt='...'
          style={{ height: "246px" }}
        />
        <button
          onClick={() => {
            handleJoinEvent(newEventInfo._id);
          }}
          className='btn btn-success btn-join'
        >
          <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
          &#160;&#160;{newEventInfo.name}
        </button>
      </div>
    </div>
  );
};

export default CreatedEventCard;
