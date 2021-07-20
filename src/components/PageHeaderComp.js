const PageHeader = ({title, subtitle,}) => {
    return(
        <header className="pageHeader">
            <span className="pageTitle">
                {title} 
            </span>
            <span className="pageSubtitle">
                {subtitle}
            </span>
        </header>
    )
}

export default PageHeader;