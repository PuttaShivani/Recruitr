import React, { useState } from 'react';
import {  FaCirclePlus } from 'react-icons/fa6';



const ProfilePage = () => {
  const [selects, setSelects] = useState('');
  const [status, setStatus] = useState('');

  return (
    
    <div>
      <h1> Profile</h1>
      <div className="total">
      
      <div className="profile-section">

        <div className="subpro">
          <h6>Build Resume with Recruitr < FaCirclePlus/> </h6>
          <div className="subpro1">
            <p>
              Update these details for better chances of selection,
              <br />
              These Information can be viewed by Hiring Teams.
            </p>
          </div> <hr/>
          <h6>Work Experience & Skills <FaCirclePlus/>  </h6>
          <div className="subpro1">
            <p>Add all your Internships, Work Details...</p>
          </div> <hr/>
          <h6>Qualifications <FaCirclePlus/> </h6>
          <div className="subpro1">
            <p>Highlight your Education in the eye of recruiters...</p> <hr/>
          </div>
          <h6>Highlights, Sports...<FaCirclePlus/>  </h6>
          <div className="subpro1">
            <p>Show your Highlights & Sports etc to recruiting teams...</p>
          </div> <hr/>
          <h6>Recommendations          <FaCirclePlus/></h6>  
          <div className="subpro1">
            <p>Provide Recommendations, get Recommendations... </p>
          </div><hr/>
          <h6>Upload Video Resume <FaCirclePlus/> </h6>
          <div className="subpro1">
            <p>Now share your details in video form to Employers...</p>
          </div>
        </div>
      </div>
      <div className="experience-section">
        <h3>Add Experiences</h3>
        <div className="form-container">
          <div className="column">
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" placeholder="Example: Product manager" className="form-control" />
            </div>
            <div className="form-group">
              <label>Employment Type</label>
              <select value={selects} onChange={(e) => setSelects(e.target.value)} className="form-control">
                <option>Full Time</option>
                <option>Internship</option>
                <option>Part Time</option>
                <option>On-site</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Work Location</label>
              <input type="text" placeholder="Example: London-work from home" className="form-control" />
            </div>
            <div className="form-group">
              <label>Starting Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label>Starting Date</label>
              <input type="text" placeholder='Description about you' className="form-control1" />
            </div>

          </div>
          <div className="column">
          <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Example: Google" className="form-control" />
            </div>
            <div className="form-group">
              <label>Work Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                <option>Currently Working</option>
                <option>Not Working</option>
                <option>Part time Working</option>
                <option>Others</option>
              </select>
            </div>
            <div className="form-group">
              <label>Add C.T.C</label>
              <input type="text" placeholder="#only figure entry in salary" className="form-control" />
            </div>
            <div className="form-group">
              <label>Ending Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
   <div className='last'> <p>@2023 recruitr</p><p> Customer Support  | Private Policy</p>
       </div>
  </div>
    
    
  
  );
};

export default ProfilePage;
