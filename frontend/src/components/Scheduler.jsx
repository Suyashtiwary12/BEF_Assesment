import React, { useState } from 'react';
import { format, addDays, subDays } from 'date-fns';

function Scheduler() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([
    { id: 1, title: 'Sending the mails from uploaded CSV', time: new Date(new Date().setHours(9, 0, 0)) },
    { id: 2, title: 'Response Review', time: new Date(new Date().setHours(14, 30, 0)) }, // Example with 2 PM
  ]);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventTime, setNewEventTime] = useState('');
  const [timeInputError, setTimeInputError] = useState('');

  const nextDay = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  const prevDay = () => {
    setCurrentDate(subDays(currentDate, 1));
  };

  const toggleAddEvent = () => {
    setIsAddingEvent(!isAddingEvent);
    setNewEventTitle('');
    setNewEventTime('');
    setTimeInputError('');
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setNewEventTime(value);
    // Basic regex to check for 24-hour HH:MM format
    if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value) && value.length > 0) {
      setTimeInputError('Invalid time format (HH:MM - 24 hour)');
    } else {
      setTimeInputError('');
    }
  };

  const handleAddEvent = () => {
    if (!newEventTitle) {
      alert('Please enter an event title.');
      return;
    }
    if (!newEventTime) {
      alert('Please enter an event time.');
      return;
    }
    if (timeInputError) {
      alert(timeInputError);
      return;
    }

    const [hours, minutes] = newEventTime.split(':').map(Number);
    const newEventDateTime = new Date(currentDate);
    newEventDateTime.setHours(hours, minutes, 0);

    setEvents([...events, { id: Date.now(), title: newEventTitle, time: newEventDateTime }]);
    setIsAddingEvent(false);
    setNewEventTitle('');
    setNewEventTime('');
    setTimeInputError('');
  };

  const getEventsForDay = () => {
    return events.filter(
      (event) => format(event.time, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd')
    );
  };

  const renderTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date(currentDate);
        time.setHours(hour, minute, 0);
        const formattedTime = format(time, 'HH:mm');
        const eventsInSlot = getEventsForDay().filter(
          (event) => format(event.time, 'HH:mm') === formattedTime
        );

        timeSlots.push(
          <div key={formattedTime} className="py-2 border-b border-gray-200">
            <div className="flex items-center">
              <span className="w-20 text-sm text-gray-600">{formattedTime}</span>
              <div className="flex-1 pl-2">
                {eventsInSlot.map((event) => (
                  <div
                    key={event.id}
                    className="bg-blue-100 text-blue-700 p-1 rounded-md text-xs mb-1"
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    }
    return timeSlots;
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevDay}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Previous
        </button>
        <h2 className="text-xl font-semibold">{format(currentDate, 'EEEE, MMMM d, yyyy')}</h2>
        <button
          onClick={nextDay}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>

      <button
        onClick={toggleAddEvent}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Event
      </button>

      {isAddingEvent && (
        <div className="mb-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Add New Event</h3>
          <div className="mb-2">
            <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-1">
              Title:
            </label>
            <input
              type="text"
              id="eventTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="eventTime" className="block text-gray-700 text-sm font-bold mb-1">
              Time (HH:MM - 24 hour):
            </label>
            <input
              type="text"
              id="eventTime"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={newEventTime}
              onChange={handleTimeChange}
              placeholder="e.g., 14:30"
            />
            {timeInputError && <p className="text-red-500 text-xs italic mt-1">{timeInputError}</p>}
          </div>
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
          >
            Save Event
          </button>
          <button
            onClick={toggleAddEvent}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mt-2"
          >
            Cancel
          </button>
        </div>
      )}

      <div className="overflow-y-auto h-96">{renderTimeSlots()}</div>
    </div>
  );
}

export default Scheduler;