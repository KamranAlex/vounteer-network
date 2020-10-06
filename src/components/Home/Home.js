import React from "react";
import Header from "../Header/Header";
import fakeData from "../fakeData/fakeData";
import EventsCard from "../EventsCard/EventsCard";

const Home = () => {
  return (
    <div>
      <div className='container mb-5'>
        <div className='row'>
          {fakeData.map((singleEvent) => (
            <EventsCard singleEvent={singleEvent}></EventsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
