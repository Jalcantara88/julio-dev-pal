const Footer = () => {
    return(
        <footer class="siteFooter mt-5">
            <section className="footerBox">
                <ul className="footerList">
                    <li><a href="#test"><i class="socialLink fab fa-github fa-lg "/> github</a></li>
                    <li><a href="#test"><i class="socialLink fab fa-linkedin fa-lg"/> linkedin</a></li>
                    <li><a href="#test"><i class="socialLink fab fa-behance fa-lg"/> behance</a></li>
                    <li><a href="#test"><i class="socialLink fab fa-youtube fa-lg"/> youtube</a></li>
                </ul>
            </section>
            <section className="footerBox">
                <img alt="logo"/>
                <p>copyright © 2021</p>
            </section>
            <section className="footerBox">
                <ul className="footerList" id="right-text">
                    <li><a href="#test">home <i class="fas fa-home"></i></a></li>
                    <li><a href="#test">about <i class="fas fa-address-card"></i></a></li>
                    <li><a href="#test">projects <i class="fas fa-address-card"></i></a></li>
                    <li><a href="#test">contact <i class="fas fa-envelope-open-text"></i></a></li>
                </ul>

            </section>

        </footer>
    );
};

export default Footer;