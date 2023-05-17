import EventCard from "./EventCard/EventCard";

const Event = () => {
  return (
    <div className="grid lg:grid-cols-2">
        <EventCard/>
        <EventCard/>
    </div>
  );
};

export default Event;
