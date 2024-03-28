import CallToAction from './CallToAction';

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served  with a modern twist</p>
                       <CallToAction href="/booking" st="Reserve a Table" />
                    </div>
                    <div className="col-4 float-end">
                        <div style={{
      backgroundImage: `url("/restauranfood.jpg")`
    }} className="bgheader"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;