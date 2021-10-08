import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import Form from 'react-bootstrap/Form'
import TimezonePicker from 'react-bootstrap-timezone-picker';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { AppointmentContext } from '../ContextApi/Context';
import { v4 as uuidv4 } from 'uuid';
import TimePicker from 'react-time-picker';



const NewPatient = ({ closeModal }) => {

    //use the context created so all the data are saved and manged by the contextApi
    const [appointment, setAppointment] = useContext(AppointmentContext)


    let initialState = {
        visitType: '',
        from: '',
        timing: '',
        to: '',
        time: '',
        patient: '',
        physical: '',
        noting: '',
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log('form', appointment)
    //submit modal
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const id = Math.floor(Math.random() * 10000) + 1
        if(!formData.from && !formData.noting && !formData.patient && !formData.physical && !formData.time && !formData.to && !formData.visitType && !formData.noting){
            alert('plese enter all fields');
            return 
        } 
        const newAppt = { id,...formData}
        setAppointment(prevState => [...prevState, newAppt]);
       closeModal()
        
    }

    
    return (
        <div>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
            </div>

            <Modal show={true} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add an appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label >Type: </Form.Label>
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example mb-3" name="visitType"
                                onChange={handleChange} >

                                <option selected>Select visit</option>
                                <option value="19">Office visit</option>
                                <option value="22">check-up</option>
                                <option value="33">counselling</option>
                            </select>
                        </Form.Group>

                        <Form.Group>

                            <Form.Label>From: </Form.Label>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="date" class="form-control" placeholder="Username" aria-label="Username" name="from" onChange={handleChange}></input>
                                </div>
                                <div className="col-md-6">
                                    <TimePickerComponent id="timepicker" onChange={handleChange} placeholder="select time --" name="timing" value={initialState.timingt} />
                            
                                </div>


                            </div>

                        </Form.Group>
                        <Form.Group>

                            <Form.Label>To: </Form.Label>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input type="date" class="form-control" placeholder="Username"
                                        aria-label="Username" name="to" onChange={handleChange} ></input>
                                </div>
                                <div className="col-md-6">

                                    <TimePickerComponent id="timepicker" onChange={handleChange}
                                        placeholder="select time --" name="time" value={initialState.time} />

                                </div>
                            </div>


                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Attach Patient: </Form.Label>
                            <select className="form-select form-select-sm" aria-label=".form-select-sm example mb-3" name="patient" onChange={handleChange}>
                                <option selected>Select Patient</option>
                                <option value="mr jerry">Mr jerry</option>
                                <option value="mrs anita">Mrs Anita</option>
                                <option value="mr james">Mr james</option>
                            </select>

                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Attending Physical: </Form.Label>
                            <select className=" mb-3 form-select form-select-sm"
                                aria-label=".form-select-sm example" name="physical"
                                onChange={handleChange}>
                                <option selected>Select Physical</option>
                                <option value="Dr Abiodu">Dr Abiodun</option>
                                <option value="Dr mufu">Dr mufu</option>
                                <option value="Dr orlando">Dr orlando</option>
                            </select>


                        </Form.Group>

                        <Form.Group>
                            <label for="exampleFormControlInput1" class="form-label">Note</label>

                            <input className="form-control form-control-sm" type="text"
                                placeholder="note.." aria-label="New appointment" onChange={handleChange} name="noting" required spellCheck="true" />

                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewPatient
