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
                    <Button className="projectCard__button">see more</Button>

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
                Projects 
            </header>
            <p>
                these are a few of my latest projects
            </p>
            <section className="projectList">
                {projectList}

            </section>
        </main>
    )
    
};

export default ProjectGallery;