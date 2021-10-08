import React from 'react'
import './Sidemenu.css'

const Home = ({openModal, setOpenModal}) => {
    const toggleModal=()=>{
        setOpenModal(true)
       
    }
    

    return (

        <div className='sidemenu container-fluid'>
            <div className='anquora'>
               
                <p className="heading" style={{fontSize:'30px'}}>  <span> <i class="bi bi-pie-chart"style={{fontSize:'35px'}}> </i></span> Anquora</p>
            </div>

            <div className='action'>
                <p>  Quick Actions</p>
                <div className="menu">
                    <a href="#"><i class="bi bi-search"></i></a>
                    <input type="text" placeholder="search anything"></input>
                </div>
                <div className="menu"  onClick={toggleModal}>
                    <a href="#"><i class="bi bi-plus-lg"></i></a>
                    <button type="button"   > Add a new Patient</button>
                </div>

               
                <p>Manage</p>

                <div className="calendar">
                    <a href="#"><i class="bi bi-calendar-day"></i></a>
                    <button className=""> Calendar</button>
                </div>
                <div className="menu">
                 <i class="bi bi-person-circle"></i>
                    <button> Manage Patient</button>
                </div>
                <div className="menu">
                    <a href="#"><i class="bi bi-gear-wide-connected"></i></a>
                    <button> Setting</button>
                </div>
            </div>

            <div class="user">
                <a href="#" class="d-flex align-items-center  text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" class="rounded-circle w-5" style={{width:'4rem'}}/> 
                    
                </a>

            </div>

        </div>


    )
}

export default Home
