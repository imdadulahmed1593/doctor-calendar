import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { MdClose } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [name, setName] = useState(selectedEvent ? selectedEvent.name : '');
  const [gender, setGender] = useState(
    selectedEvent ? selectedEvent.gender : ''
  );
  const [age, setAge] = useState(selectedEvent ? selectedEvent.age : 0);
  //   const [date, setDate] = useState(selectedEvent ? selectedEvent.name : '');
  const [time, setTime] = useState(selectedEvent ? selectedEvent.time : '');

  function handleSubmit(e) {
    e.preventDefault();
    const appointment = {
      name,
      age,
      gender,
      time,
      date: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: 'update', payload: appointment });
    } else {
      dispatchCalEvent({ type: 'push', payload: appointment });
    }

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="font-bold py-3 text-gray-400">
            Appointment Details
          </span>
          <div className="gap-5 flex items-center">
            {selectedEvent && (
              <FaTrash
                className=" text-gray-400 cursor-pointer"
                onClick={() => {
                  dispatchCalEvent({
                    type: 'delete',
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
              />
            )}
            <button onClick={() => setShowEventModal(false)}>
              <MdClose className=" text-gray-400 cursor-pointer " />
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              value={name}
              required
              className="pt-3 border-0 text-gray-600 placeholder-gray-300 font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Age:</label>
            <input
              type="number"
              name="age"
              placeholder="your age"
              value={age}
              required
              className="pt-3 border-0 text-gray-600 placeholder-gray-300 font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              placeholder="your gender"
              value={gender}
              required
              className="pt-3 border-0 text-gray-600 placeholder-gray-300 font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Schedule:</label>
            <p className="pt-3 ">{daySelected.format('dddd, MMMM DD')}</p>
            <label className="mr-2">Select Time:</label>
            <input
              type="time"
              value={time}
              className="pt-3 border-0 text-gray-600 placeholder-gray-300 font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <footer className="flex justify-end  p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
