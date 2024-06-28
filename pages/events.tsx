
const Events = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Events</h1>
      <section id="past-events">
        <h2>Past Events</h2>
        <ul>
          <li>Event 1 - Date</li>
          <li>Event 2 - Date</li>
          {/* Add more past events here */}
        </ul>
      </section>
      <section id="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Event 3 - Date</li>
          <li>Event 4 - Date</li>
          {/* Add more upcoming events here */}
        </ul>
      </section>
    </div>
  );
};

export default Events;
