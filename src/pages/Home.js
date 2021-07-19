import ProjectGallery from '../components/ProjectGallery';
import Intro from '../components/Introcomp';
import {Projects} from '../shared/projectsData';

const Home = () => {
    return(
        <div className="content">
            <Intro/>
            <ProjectGallery projects={Projects}/>
        </div>
    )
}

export default Home;