function Specials(props) {
    return (
        <div className="col-4">
            <article>
                <div className="thumb" style={{ backgroundImage: `url(${props.background})` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>{props.title}</h1>
                        </div>
                        <div className="col-4">
                            <h2 className="price">${props.price}</h2>
                        </div>
                    </div>
                    <p>{props.description}</p>
                    <a href="#" className="order">Order a delivery</a>
                </div>
            </article>
        </div>
    );
}

export default Specials;