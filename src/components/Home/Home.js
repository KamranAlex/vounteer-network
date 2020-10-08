import React, { useEffect, useState } from "react";
import fakeData from "../fakeData/fakeData";
import EventsCard from "../EventsCard/EventsCard";
import "./Home.css";
import CreatedEventCard from "../EventsCard/CreatedEventCard";

const Home = () => {
  const [createdEvents, setCreatedEvents] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-atoll-91889.herokuapp.com/createdEvent")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedEvents(data);
      });
  }, []);

  return (
    <div>
      <div className='container mb-5'>
        <div className='slogan text-center'>
          <h2 className='slogan-text'>I Grow by Helping People in Need</h2>
          <div className='event-search'>
            <input type='text' />
            <button className='btn-primary'>Search</button>
          </div>
        </div>
        <div className='row'>
          {fakeData.map((singleEvent) => (
            <EventsCard singleEvent={singleEvent}></EventsCard>
          ))}
          {createdEvents.map((newCreatedEvent) => (
            <CreatedEventCard
              newCreatedEvent={newCreatedEvent}
            ></CreatedEventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
