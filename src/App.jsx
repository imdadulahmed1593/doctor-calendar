import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Sidebar from './components/Sidebar';
import Month from './components/Month';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currenMonth} />
      </div>
    </div>
  );
}

export default App;
