import dayjs from 'dayjs';
import React, { useContext } from 'react';
import logo from '../assets/react.svg';
import GlobalContext from '../context/GlobalContext';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import CreateEventButton from './CreateEventButton';

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center justify-between">
      <div className="py-2 flex items-center">
        <div className="py-2 flex items-center">
          <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
          <h1 className="mr-10 text-xl text-gray-500 fond-bold">
            Doctor's Appointment List
          </h1>
        </div>
        <div className="py-2 flex items-center">
          <button
            onClick={handleReset}
            className="border rounded py-2 px-4 mr-5"
          >
            Today
          </button>
          <button onClick={handlePrevMonth}>
            <FaAngleLeft />
          </button>
          <button onClick={handleNextMonth}>
            <FaAngleRight className="ml-5" />
          </button>
          <h2 className="ml-4 text-xl text-gray-500 font-bold">
            {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
          </h2>
        </div>
      </div>
      <CreateEventButton />
    </header>
  );
}
