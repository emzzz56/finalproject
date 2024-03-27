function MAIN(props) {
    return (
        <main>
            <section id='specials'>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>This Week Specials</h1>
                        </div>
                        <div className="col-4 text-right">
                            <a href="#" className="btn">Online Menu</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <article>
                                <div className="thumb" style={{ backgroundImage: `url("/greeksalad.jpg")` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8">
                                            <h1>Greek Salad</h1>
                                        </div>
                                        <div className="col-4">
                                            <h2 className="price">$12.00</h2>
                                        </div>
                                    </div>
                                    <p>The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                                    <a href="#" className="order">Order a delivery</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-4">
                            <article>
                                <div className="thumb" style={{ backgroundImage: `url("/bruchetta.svg")` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8">
                                            <h1>Bruchetta</h1>
                                        </div>
                                        <div className="col-4">
                                            <h2 className="price">$5.99</h2>
                                        </div>
                                    </div>
                                    <p>Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                    <a href="#" className="order">Order a delivery</a>
                                </div>
                            </article>
                        </div>
                        <div className="col-4">
                            <article>
                                <div className="thumb" style={{ backgroundImage: `url("/lemondessert.jpg")` }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8">
                                            <h1>Lemon Dessert</h1>
                                        </div>
                                        <div className="col-4">
                                            <h2 className="price">$5.00</h2>
                                        </div>
                                    </div>
                                    <p>This comes straight from grandma’s recipe book. every last ingredient has been sourced is as authentic as can be imagined.</p>
                                    <a href="#" className="order">Order a delivery</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="dark-green">
                <div className="container">
                    <h1 className="text-center py-3 ">Testimonials</h1>
                    <div className="row">
                        <div className="col-3">
                            <article className="pb-0">
                                <div className="container">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><br />
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="/John_Doe.jpg" alt="John Doe" className="full" />
                                        </div>
                                        <div className="col-8">
                                            <h1 className="px-1">John Doe</h1>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="pb-0">
                                <div className="container">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><br />
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="/John_Doe.jpg" alt="John Doe" className="full" />
                                        </div>
                                        <div className="col-8">
                                            <h1 className="px-1">John Doe</h1>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="pb-0">
                                <div className="container">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><br />
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="/John_Doe.jpg" alt="John Doe" className="full" />
                                        </div>
                                        <div className="col-8">
                                            <h1 className="px-1">John Doe</h1>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="pb-0">
                                <div className="container">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><br />
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="/John_Doe.jpg" alt="John Doe" className="full" />
                                        </div>
                                        <div className="col-8">
                                            <h1 className="px-1">John Doe</h1>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>Little Lemon</h1>
                            <h2 className="fs-20">Chicago</h2>
                            <p className="c-dark-green">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt, perferendis neque debitis minus earum enim, recusandae atque unde laudantium! Sint, dolores commodi? Obcaecati, possimus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt, perferendis neque debitis minus earum enim, recusandae atque unde laudantium! Sint, dolores commodi? Obcaecati, possimus.</p>
                        </div>
                        <div className="col-4">
                            <img src="/MarioandAdrianA.jpg" alt="" className="full" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MAIN;