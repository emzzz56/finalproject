function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    <img src={'/Logo.svg'} alt="little lemon" />
                    </div>
                    <div className="col-3">
                        <div className="title">Quick Navigation</div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <div className="title">Contact</div>
                        <ul>
                            <li>5th Avenue 48 st.<br />Chicago 11911</li>
                            <li>(555) 555-5555</li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <div className="title">Social Media</div>
                    <ul className="horizontal">
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
