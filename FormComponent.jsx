import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { FaRegUser, FaFileAlt, FaSignOutAlt, FaUserCircle, FaUserPlus, FaStar, FaRegCircle, FaRegCopy, FaReddit, FaInstagram, FaFacebook, FaWhatsapp, FaStackOverflow} from 'react-icons/fa';
import { FaCircleDot, FaCircleInfo, FaPencil, FaUpload } from 'react-icons/fa6';

const options = [
  { value: 'Robin', label: 'Robin', icon: <FaUserCircle /> },
  { value: 'profile', label: 'Profile', icon: <FaRegUser /> },
  { value: 'update-job-preference', label: 'Update Job Preference', icon: <FaPencil /> },
  { value: 'update-documents', label: 'Update Documents', icon: <FaFileAlt /> },
  { value: 'hiring-process-details', label: 'Hiring Process Details', icon: <FaCircleInfo /> },
  { value: 'subscription-details', label: 'Subscription Details', icon: <FaStar /> },
  { value: 'refer-to-friends', label: 'Refer to Friends', icon: <FaUserPlus /> },
  { value: 'logout', label: 'Logout', icon: <FaSignOutAlt />  , className: 'logout-option'},
];

const jobOptions = [
  'UI/UX Developer',
  'Product Manager',
  'Sales Executive',
  'Human Resource Manager',
  'Java Developer',
];

const FormComponent = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobPreference, setJobPreference] = useState([]);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (
      option.value === 'update-job-preference' ||
      option.value === 'update-documents' ||
      option.value === 'hiring-process-details' ||
      option.value === 'subscription-details' ||
      option.value === 'refer-to-friends'
    ) {
      setIsModalOpen(true);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCheckboxChange = (job) => {
    setJobPreference((prev) => {
      if (prev.includes(job)) {
        return prev.filter((j) => j !== job);
      } else {
        return [...prev, job];
      }
    });
  };

  const handleSaveJobPreference = () => {
    console.log('Job Preference Saved:', jobPreference);
    setIsModalOpen(false);
  };

  const renderJobPreferenceModal = () => (
    <>
      <h2>Job Preference</h2>
      <form>
        {jobOptions.map((job) => (
          <label key={job} className="checkbox-label">
            <input
              type="checkbox"
              value={job}
              checked={jobPreference.includes(job)}
              onChange={() => handleCheckboxChange(job)}
            />
            {job}
          </label>
        ))}
        <div className="modal-buttons">
          <button type="button" onClick={handleSaveJobPreference}>
            Save
          </button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
      {jobPreference.length > 0 && (
        <div className="selected-job-preferences">
          <h3>Selected Job Preferences:</h3>
          <ul>
            {jobPreference.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  const renderDocumentUploadModal = () => (
    <>
      <h2>Update Documents</h2>
      <h4>Document Details</h4>
      <p className="instruction-text">
        Upload These Necessary Documents, Company will ask to Upload During Document verification Process.
      </p>
      <form>
        {[
          { label: 'Upload Pan Card', name: 'panCard' },
          { label: 'Upload Blank Cheque', name: 'blankCheque' },
          { label: 'Relieving Letter', name: 'relievingLetter' },
          { label: 'Resignation Letter', name: 'resignationLetter' },
          { label: 'Driving License', name: 'drivingLicense' },
        ].map(({ label, name }) => (
          <div key={name} className="file-upload-label">
            {label}
            <div className="file-upload-wrapper">
              <label className="custom-file-upload">
                <input type="file" name={name} className="file-upload-input" />
              </label>
              <FaUpload className="file-upload-icon" />
            </div>
          </div>
        ))}
        <div className="modal-buttons">
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Save
          </button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );

  const renderHiringProcessDetailsModal = () => (
    <div className="hiring-process-modal">
      <h4 style={{ color: 'blue' }}>Hiring Process in Details</h4>
      <p>Get Job with our Simplest Hiring Process</p>
      <p style={{ color: 'GrayText' }}>
        We provide you a very user-friendly process so that no Employee & Employer waste too much time in Hiring Process. Our simplest process will work according to you.
      </p>
      <div style={{ border: '1px solid', padding: '5px' }}>
      Job Posting & Application Phase <br />
        <p style={{ color: 'GrayText' }}>
        
          Every Employer posts a Job from their side, and after all verification, the Job will be Active on Recruitr, which will be visible to Applicants just within a few minutes.
        </p>
      </div>
      <br />
      <div style={{ border: '1px solid', padding: '5px' }}>
      Shortlisting Phase for Employers<br />
        <p style={{color:'GrayText'}}>
          
          After receiving Applications within a Month, Employers will shortlist all Applicants according to their needs and Move them to the next Phase of Assessment.
        </p>
      </div>
      <br />
      <div style={{ border: '1px solid', padding: '5px' }}>
      Shortlisting Phase for Employers Assessment Phase <br />
        <p style={{color:'GrayText'}}>
         
          After Shortlist/Screen in Employer will send Assessment to all the Candidates with 1-2 Days of Screen in, Assessment will be submit from Employer on first Phase itself for easy process.
        </p>
      </div>
      <br />
      <div style={{ border: '1px solid', padding: '5px' }}>
      Interview Phase<br />
        <p style={{color:'GrayText'}}>
         
          After Shortlisting the Assessment candidates will be Moved to Interview Phase & Interview will be Conducted within 4-5 Days.
          Note: Interviews can be more than one.
        </p>
      </div>
    </div>
  );

  const renderSubscriptionDetailsModal = () => (
    <div className="subscription-details-modal">
      <h2>Subscription Details</h2>
      <p>Existing Plan:</p>
      <div style={{ border: '1px solid', padding: '5px'  }}>
        <p>Recruitr Fresher Candidate</p>
        <div style={{color:'GrayText'}}><p>Purchased on: 27th Mar 2023</p>
        <p>Valid Till: 27th Jun 2023</p></div>
      </div > <br/>
      <p>Upgrade Your Plan to</p>
      <div style={{ border: '1px solid', padding: '5px' }}> 
        <p> < FaRegCircle/>Recruitr Gold Candidate <br/> ₹200 <br/> <hr/> Get a Chance to Apply Jobs which asking Experience<br/></p>
       <p style={{ color:'grayText'}}> Using our Gold subscription package, one can also Apply to the jobs which asking Experienced Candidates.</p>
      </div> <br/>
      <div style={{ border: '1px solid', padding: '5px' }}> 
       <div style={{color:'blue'}}> <p>  <FaCircleDot/></p></div><p> Recruitr Diamond Candidate <br/> ₹400</p>
      </div>
     <div style={{ padding:'20px', alignContent:'center' , border: '1px', boxSizing:'20px' } }> <button> UpGrade Subscirption</button> </div>
      <div className="modal-buttons">
        <button type="button" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );

  const renderReferToFriendsModal = () => (
    <div className="refer-to-friends-modal">
      <h3> Refer to Your Friends</h3> <br/>
      <p style={{ border:'1px solid', padding: '15px',fontSize:'14px', color:'GrayText' }}>
        Hey! It's been a game-changer for me in finding job opportunities and connecting with employers. Join now to level up our careers together! Get it from: 
        <a href="https://recruitr.com/invite" target="_blank" rel="noopener noreferrer">https://recruitr.com/invite</a>
        - Sender name
      </p>
      <div>
      <div className='copy'> 
         <FaRegCopy/>Copy 
      </div>
      <div className='lgo'> 
        <div className='logo' style={{color:'red'}}> 
          <FaReddit/>
        </div>
        <div className='logo'> 
          <FaInstagram/>
        </div>
        <div className='logo'>
          <FaFacebook/>
        </div>
        <div className='logo'>
          <FaWhatsapp/>
        </div>
        <div className='logo'>
          <FaStackOverflow/>
        </div>
      </div>
    </div>
      <div className="modal-buttons">
        <button type="button" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
        <span className="dropdown-icon">{selectedOption.icon}</span>
        {selectedOption.label}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
            >
              <span className="dropdown-icon">{option.icon}</span>
              {option.label}
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Modal"
        ariaHideApp={false}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedOption.value === 'update-job-preference'
          ? renderJobPreferenceModal()
          : selectedOption.value === 'update-documents'
          ? renderDocumentUploadModal()
          : selectedOption.value === 'hiring-process-details'
          ? renderHiringProcessDetailsModal()
          : selectedOption.value === 'subscription-details'
          ? renderSubscriptionDetailsModal()
          : selectedOption.value === 'refer-to-friends'
          ? renderReferToFriendsModal()
          : null}
      </Modal>
    </div>
  );
};

export default FormComponent;
