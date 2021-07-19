import React from 'react';
import { Button, 
    ButtonGroup 
} from 'reactstrap';
import { Link} from 'react-router-dom';
import {Profile} from '../shared/profileData';

const Intro = () => {
    const skillsList = Profile.mainSkills.map(item => {
        return(
            <Button id="skill">{item}</Button>
        )
    });
    
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
                
                <div className="skillsHolder">
                    <span><i class="fab fa-react fa-lg align-self-center"></i> React</span>
                    <span><i class="fab fa-bootstrap fa-lg align-self-center"></i> Bootstrap</span>
                    <span><i class="fab fa-node-js fa-lg align-self-center"></i> Node</span>

                </div>
                {/*
                <Button className="mt-3 w-100">Contact</Button>
                
                <ButtonGroup className="my-3" id="profileLinks ">
                    <Button tag={Link} to="https.www.google.com"><i class="socialLink fab fa-github fa-2x"></i></Button>
                    <Button><i class="socialLink fab fa-linkedin fa-2x"></i></Button>
                    <Button><i class="socialLink fab fa-behance-square fa-2x"></i></Button>
                    <Button><i class="socialLink fab fa-youtube fa-2x"></i></Button>
                </ButtonGroup>
                */}
                
            </div>
        </section>
        <section className="profileBottom">
            <ButtonGroup className="my-3 profileLinks">
                <Button><i class="socialLink fab fa-github fa-2x"></i></Button>
                <Button><i class="socialLink fab fa-linkedin fa-2x"></i></Button>
                <Button><i class="socialLink fab fa-behance-square fa-2x"></i></Button>
                {/*<Button><i class="socialLink fab fa-youtube fa-2x"></i></Button>*/}
                <Button id="contactBtn">Contact</Button>
            </ButtonGroup>
            

        </section>
        
        
    </header>
  );
}

export default Intro;

