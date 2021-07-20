const Footer = () => {
    return(
        <footer className="siteFooter mt-5">
            <section className="footerBox">
                <ul className="footerList">
                    <li><a href="#test"><i className="socialLink fab fa-github fa-lg "/> github</a></li>
                    <li><a href="#test"><i className="socialLink fab fa-linkedin fa-lg"/> linkedin</a></li>
                    <li><a href="#test"><i className="socialLink fab fa-behance fa-lg"/> behance</a></li>
                    <li><a href="#test"><i className="socialLink fab fa-youtube fa-lg"/> youtube</a></li>
                </ul>
            </section>
            <section className="footerBox">
                <img alt="logo"/>
                <p>copyright © 2021</p>
            </section>
            <section className="footerBox">
                <ul className="footerList" id="right-text">
                    <li><a href="#test">home <i className="fas fa-home"></i></a></li>
                    <li><a href="#test">about <i className="fas fa-address-card"></i></a></li>
                    <li><a href="#test">projects <i className="fas fa-address-card"></i></a></li>
                    <li><a href="#test">contact <i className="fas fa-envelope-open-text"></i></a></li>
                </ul>

            </section>

        </footer>
    );
};

export default Footer;