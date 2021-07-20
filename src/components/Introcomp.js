import React from 'react';
import { Button, 
    ButtonGroup 
} from 'reactstrap';
import { Link} from 'react-router-dom';
import {Profile} from '../shared/profileData';
import SocialButtons from './socialBtnsComp';

const Intro = ({fullSocial, showContact, showSkills}) => {
    var socialBtns = <SocialButtons full={fullSocial} contact={showContact}/>;

    var skills = <></>;

    if(showSkills) {
        skills = 
            <div className="skillsHolder">
                <span><i className="fab fa-react fa-lg align-self-center"></i> React</span>
                <span><i className="fab fa-bootstrap fa-lg align-self-center"></i> Bootstrap</span>
                <span><i className="fab fa-node-js fa-lg align-self-center"></i> Node</span>
            </div>
    }
    
    
  return (
    <header className="profileBrief">
        <section className="profileTop">
            <div className="profileImage">
                <img className="img-fluid" src={Profile.imgUrl} alt="Julio profile image"/>

            </div>
            <div className="profileDetails">
                <h1 className="profileName mt-3">
                    {Profile.name}
                </h1>
                <span className="profileRole">
                    {Profile.role}
                </span>
                <blockquote className="profileStatement">
                    " {Profile.statement} "
                </blockquote>
                
                {skills}
                
            </div>
        </section>
        <section className="profileBottom">
            {socialBtns}
        </section>
        
        
    </header>
  );
}

export default Intro;

