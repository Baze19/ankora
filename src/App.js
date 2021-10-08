import React, { useState, useContext } from 'react'
import './App.css';
import NewPatient from './components/newPatient/NewPatient'
import Sidemenu from './components/Sidemenu/Sidemenu';
import Calendar from './components/calendar/Calendar';
import { ContextProvider } from './components/ContextApi/Context'
import { AppointmentContext } from '../src/components/ContextApi/Context';



function App() {
  
  // const [appointment, setAppointment] = useContext(AppointmentContext)
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
 
  

  return (
    //wrap the context provider accross the whole app
    <ContextProvider>
      <div className="App ">
        {openModal ? <NewPatient closeModal={closeModal} /> : null}

        <Sidemenu openModal={openModal} setOpenModal={setOpenModal} />
        <Calendar openModal={openModal} setOpenModal={setOpenModal} />
      </div>
    </ContextProvider>

  );
}

export default App;
