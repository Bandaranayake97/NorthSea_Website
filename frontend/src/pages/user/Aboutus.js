import React from 'react';
import './Aboutus.css';

import VissionMission from '../../components/VisionMission/VissionMission';
import Line from '../../components/Line/Line';
import MemberCard from '../../components/MemberCard/MemberCard';  
import DirectorCard from '../../components/DirectorCard/DirectorCard';
import DirectorDescriptionCard from '../../components/DirectorDecriptionCard/DirectorDescription';

import BlueEye from '../../images/BlueEye.png';
import BlueMission from '../../images/BlueMission.png';
import member1 from '../../images/member.png';
import director1 from '../../images/directorImg.png';
import managementIcon from '../../images/managementIcon.png';

function Aboutus() {
  return (
    <div>
      <div className='aboutus-page'>
        <div className='aboutus'>
          <div className='section-content-container'>
            <h1 className='aboutus-text'>About Us</h1>
          </div>
        </div>
        <div className="row-container">
          <VissionMission
            className="vm-card"
            props={{image:BlueEye,title:"Vision",content:"Our vision is to establish unparalleled excellence in boat building and maritime services, setting new standards through innovative craftsmanship, unwavering commitment to quality, and a steadfast dedication to customer satisfaction"}}
          />
          <Line /> 
          <VissionMission
            className="vm-card"
            props={{image:BlueMission,title:"Mission",content:"Empowering a brighter future by pioneering sustainable solutions, fostering customer delight, and driving innovation for a harmonious and thriving global environment."}}
          />
        </div>
        
      </div>
      <div className="member"> 
        <div className="memberTitle">
             <h3>Key Members</h3>
        </div>
        <div className="memberCards">
            <MemberCard
                props={{image:member1,member_name:"HON. DOUGLAS DEVANANDA",member_post:"Cabinet Minister",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>
                <MemberCard
                props={{image:member1,member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>
                <MemberCard
                props={{image:member1,member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>

        </div>
        </div>
        <div className='directors'>
          <div >
            <h1 className='director-text'>Board of Directors</h1>
          </div>
          <div  className='director-items'>
              
                <DirectorCard
                  props={{image:director1,member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                  member_fax:"02-123-4567",member_mail:"ff"}}/>
               <Line/>
               
            
            <div className='director-info'>
            <DirectorDescriptionCard
                props={{member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>
            <DirectorDescriptionCard
                props={{member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Tr dfe efesansport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>

            <DirectorDescriptionCard
                props={{member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>

            </div>

            <div className='director-info'>
            <DirectorDescriptionCard
                props={{member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>
            <DirectorDescriptionCard
                props={{member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Tr dfe efesansport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>

            <DirectorDescriptionCard
                props={{member_name:"Mr. A",member_post:"CEO",member_ministry:"Ministry of Transport",member_tel:"02-123-4567",
                member_fax:"02-123-4567",member_mail:"ff"}}/>

            </div>
          
          


          </div>

          <div className='management'>
            <div className='management-title'>
              <div className='managment-title-image'>
                <img src={managementIcon} alt='IMG' />
              </div>
              <div className='management-title-text'>
                <h4>Management team</h4>
              </div>
            </div>
            
          </div>
          
          <div>
           
          </div>

        </div>
    </div>
  );
}

export default Aboutus;
