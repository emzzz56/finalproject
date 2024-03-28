function CustomersSay(props) {
    return (
        <div className="col-3">
            <article className="pb-0">
                <div className="container">
                    <div className="rating">
                        <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><br />
                    <div className="row">
                        <div className="col-4">
                            <img src={props.image} alt={props.name} className="full" />
                        </div>
                        <div className="col-8">
                            <h1 className="px-1">{props.name}</h1>
                        </div>
                    </div>
                    <p>{props.say}</p>
                </div>
            </article>
        </div>
    );
}

export default CustomersSay;