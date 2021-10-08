import React, { useState, useEffect, useContext } from 'react'
import './Calendar.css'
import { AppointmentContext } from '../ContextApi/Context';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import moment from 'moment'


const Calendar = ({ openModal, setOpenModal }) => {
    const [appointment, setAppointment] = useContext(AppointmentContext);
    const [date, setDate] = useState('');
    const [week, setWeek] = useState(null);
    const [day, setDay] = useState(null)
    //show and close modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [appdetails, setAppDetails] = useState({})

    //add apointment directly from the calender
    const addNewAppt = () => {
        setOpenModal(true)
    }

    //show details
    const handleShow = (items) => {
        setShow(true);
        setAppDetails(items)
    }
    //
    const nextDay = () => {
        var today = new Date();
        var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        setDate(tomorrow)
    }
    //  
    const prevDay = () => {
        var today = new Date();
        var yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
        setDate(yesterday)

    }
    const weekDisplay = () => {
        let todaydate = new Date();
        let oneJan = new Date(todaydate.getFullYear(), 0, 1);
        let numberOfDays = Math.floor((todaydate - oneJan) / (24 * 60 * 60 * 1000));
        let result = Math.ceil((todaydate.getDay() + 1 + numberOfDays) / 7);
        setWeek(result)
    }

    const dayDisplay = () => {
        let day
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }

        setDay(day)
    }

    useEffect(() => {
        setDate(new Date().toDateString())
    }, []);



    return (

        <div className="cal card">
        
            <div className="dayweek">
                <p><span><i class="bi bi-arrow-left-circle" onClick={prevDay} ></i></span>
                    <span><i class="bi bi-arrow-right-circle" onClick={nextDay}></i></span>
                 
                    {moment(date).format('DD-MM-YYYY')} <span className="today"> Today </span
                    ></p>

                <div className="buttons">
                    <button onClick={dayDisplay}>Day : {day}</button>
                    <button onClick={weekDisplay}>week : {week}</button>

                </div>


            </div>
            <div style={{ padding: '5px' }}>


            </div>

            <table>

                <tr >
                    {appointment && appointment.map((items, index) => (

                        <th className="physicians">
                            <div className="actionbutton">
                                <span> <i class="bi bi-person-circle"></i></span>
                                <p> {items.patient} </p>
                                <span ><i class="bi bi-three-dots-vertical" onClick={() => handleShow(items)}></i>
                                </span>
                            </div>

                        </th>
                    ))}


                </tr>



                {["one", "two", "three", "four", "five", "six", "seven"].map((item, i) =>
                    <tr onClick={addNewAppt}>
                        <td>

                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )}
                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>{appdetails.visitType}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modalbody">
                            <div style={{ marginTop: '-5px', marginBottom: '3px' }}> <span> <i class="bi bi-person-circle"></i></span> {appdetails.patient}</div>
                            <div> <span> <i class="bi bi-stopwatch"></i></span>from : {appdetails?.time}-- to {appdetails?.timing}</div>
                            <div>  <span> <i class="bi bi-person-circle"></i></span>{appdetails.physical}</div>

                        </div>
                    </Modal.Body>

                    <div classname="button">
                        <Button className="check">
                            Checck in
                        </Button>
                        <Button className="cancel" onClick={handleClose}>
                            Cancel
                        </Button>
                    </div>
                    <Modal.Footer classname="button">

                    </Modal.Footer>
                </Modal>
            </table>
        </div>

    )
}

export default Calendar
