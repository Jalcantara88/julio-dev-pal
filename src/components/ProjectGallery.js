import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardHeader,
    CardSubtitle, 
    CardTitle, 
    Button
}from 'reactstrap';

const RenderProject = ({project}) => {
    return(
        <Card className="projectCard">
            
            <CardBody className="projectCard__body">
                
                <CardImg left width="100%" src={project.thumbImg} alt={project.imgAlt}/>
                <section>
                    <CardTitle tag="h2">
                        {project.name}
                    </CardTitle>
                    <CardSubtitle tag="h5" className="text-muted">
                    {project.subtitle}
                    </CardSubtitle>
                    <CardText>
                        {project.summary}
                    </CardText>
                    <Button id="projectCard__button">view project</Button>

                </section>
                
            </CardBody>
        </Card>
    );
};

const ProjectGallery = ({projects}) => {
    const projectList = projects.map(item => {
        return(
            <RenderProject project={item}/>
        )
    });
    

    return(
        <main>
            <header className="pageHeader">
                <span className="pageTitle">
                    Projects 
                </span>
                <span className="pageSubtitle">
                    these are a few of my latest projects
                </span>
            </header>
            
            <section className="projectList">
                {projectList}

            </section>
        </main>
    )
    
};

export default ProjectGallery;