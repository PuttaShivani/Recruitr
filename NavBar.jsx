
import React,{useState} from 'react';
import { FaCheckCircle, FaRegBell, FaUser  } from 'react-icons/fa';
import {  FaDashcube, FaMagnifyingGlass, FaRegMessage, FaSuitcase } from 'react-icons/fa6';
import FormComponent from '../components/FormComponent'

const NavBar = () => {
  const [user,Setuser] = useState();
  return (
    <div className="navSection">
        <div className="title">
            <h2>Recruitr</h2>
           <div className="subtitle">
             <h6>Your gateway to success</h6></div>
        </div>
        <div className="search">
          
            <input type="text" placeholder='Search Job...' />   
            <FaMagnifyingGlass className='search-icon'/>
      
        </div>
        <div className="dashboard"> <FaDashcube /> Dashboard
        </div>
        <div className="findjobs">< FaSuitcase/> Find jobs  </div>
        <div className="appliedJobs"> <FaCheckCircle/> Applied Jobs </div>
        <div className='dashboard'>|</div>
        <div className="search-icon"> <FaRegMessage/> </div>
        <div className="search-icon"><FaRegBell/> </div>
        <div className='dashboard'>|</div>
        <div>
          <option>
          <div>
          
          <FormComponent/>
      </div>
          </option>
        </div>
        
        </div>
    
  )
}

export default NavBar
