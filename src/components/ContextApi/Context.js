import React, { useState, createContext } from 'react';

export const AppointmentContext = createContext();
export const ContextProvider = props => {
    const [appointment, setAppointment] = useState([
          {
          id: 1,
          
          from: "2022-17-16",
          physical: "Dr kelvin",
          time: "5:30 pm",
          timing: "7:30 PM",
          to: "2022-18-19",
          visitType: "Blood Test",
            patient:"Caroline"



        },
        {
            id: 2,
            from: "2021-10-15",
            physical: "Dr kelvin",
            time: "12:30 pm",
            timing: "2;30PM",
            to: "2021-10-16",
            visitType: "Surgery",
            patient:"George"



        },
        {
            id: 3,
            from: "2021-10-15",
            physical: "Dr kelvin",
            time: "5:30:pm",
            timing: "6:30:PM",
            to: "2021-10-16",
            visitType: "Bp Test",
            patient:"Lawal"



        },
        {
            id: 4,
            from: "2021-10-15",
            physical: "Dr kelvin",
            time: "12:30 pm",
            timing: "2;30PM",
            to: "2021-10-16",
            visitType: "Diet",
            patient:"Okafor"



        },
        {
            id: 5,
        
            from: "2022-10-15",
            physical: "Dr kelvin",
            time: "12:30 :pm",
            timing: "2;30:PM",
            to: "2022-10-16",
            visitType: "jedijedi",
            patient:"Lawrence.y"



        },
        {
            id: 6,
            from: "2021-10-15",
            physical: "Dr chike",
            time: " 17:30:00  ",
            timing: " 15:30:00  ",
            to: "2021-10-16",
            visitType: "Blood Test",
            patient:"Yerins. A"



        }

      



        
    ])


    return (
        <AppointmentContext.Provider value={[appointment, setAppointment]}>
            {props.children}
        </AppointmentContext.Provider>

    )
}


