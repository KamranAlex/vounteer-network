import React, { useEffect, useState } from "react";
import fakeData from "../fakeData/fakeData";
import EventsCard from "../EventsCard/EventsCard";
import "./Home.css";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);
  const filteredEvents = fakeData.filter((flEvents) => {
    return (
      flEvents.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    );
  });

  const history = useHistory();
  useEffect(() => {
    fetch("https://aqueous-atoll-91889.herokuapp.com/createdEvent")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedEvents(data);
      });
  }, []);

  const handleJoinEvent = (id) => {
    history.push(`/register/${id}`);
  };

  return (
    <div>
      <div className='container mb-5'>
        <div className='slogan text-center'>
          <h2 className='slogan-text'>I Grow by Helping People in Need</h2>
          <div className='event-search'>
            <input
              type='text'
              placeholder='Search an Event'
              onChange={handleChange}
            />
            <button className='btn-primary'>Search</button>
          </div>
        </div>
        <div className='row'>
          {filteredEvents.map((singleEvent) => (
            <EventsCard singleEvent={singleEvent}></EventsCard>
          ))}
          {createdEvents.map((newCreatedEvent) => (
            <div className='col-md-3'>
              <div className='card event-card mt-4'>
                <img
                  src={`data:image/png;base64,${newCreatedEvent.image.img}`}
                  alt='...'
                  style={{
                    height: "299px",
                    maxWidth: "253px",
                    borderRadius: "8px",
                  }}
                />
                <button
                  onClick={() => {
                    handleJoinEvent(newCreatedEvent._id);
                  }}
                  className='btn btn-success btn-join'
                >
                  <FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon>
                  &#160;&#160;{newCreatedEvent.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
