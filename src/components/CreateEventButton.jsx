import React, { useContext } from 'react';
import plusImg from '../assets/plus.svg';
import GlobalContext from '../context/GlobalContext';
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border text-white bg-gray-900 p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="font-bold  pl-3 pr-7">Create Appointment</span>
    </button>
  );
}
