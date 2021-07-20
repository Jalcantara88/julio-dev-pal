import PageHeader from "../components/PageHeaderComp"
import {Profile} from "../shared/profileData";
import Intro from "../components/Introcomp";

const About = () => {
    return(
        <div className="content">
            <Intro fullSocial={true} showSkills={false} showContact={true}/>
            <PageHeader
                title="About"
                subtitle="This is a closer look at me"
            />
            <article>
                <header className="profileheader">

                </header>
                <section className="resume">
                    <article className="resumeArticle">
                        <span>
                            <header className="resumeHeader">
                                <i class="resumeIcon fas fa-history fa-lg"></i>
                                <span className="resumeTitle">
                                    bio  
                                </span>
                            </header>
                            <p>
                                lorem ipsum
                            </p>
                        </span>
                        
                    </article>
                    <article className="resumeArticle">
                        <header className="resumeHeader">
                            <i class="resumeIcon fas fa-brain fa-lg"></i>
                            <span className="resumeTitle">
                                skills
                            </span>
                        </header>
                        <p>
                            skill list
                        </p>
                    </article>
                    <article className="resumeArticle">
                        <header className="resumeHeader">
                            <i class="resumeIcon fas fa-code-branch fa-lg"></i>

                            <span className="resumeTitle">
                                experience
                            </span>
                        </header>
                        <p>
                            experience list
                        </p>
                    </article>
                    <article className="resumeArticle">
                        <header className="resumeHeader">
                            <i class="resumeIcon fas fa-language fa-lg"></i>
                            <span className="resumeTitle">
                                language
                            </span>
                        </header>
                        <p>
                            english / spanish
                        </p>
                    </article>

                    <article className="resumeArticle">
                        <header className="resumeHeader">
                            <i class="resumeIcon fas fa-map-marker-alt fa-lg"></i>
                            
                            <span className="resumeTitle">
                                location
                            </span>
                        </header>
                        <p>
                            Seattle Washington - Open to Remote
                        </p>
                    </article>

                </section>

            </article>
        </div>
    )
}

export default About;