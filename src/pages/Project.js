import PageHeader from "../components/PageHeaderComp"

const Project = ({project}) => {
    return(
        <>
            <PageHeader
                title={project.name}
                subtitle={project.subtitle}
            />
        </>
    )
}

export default Project;