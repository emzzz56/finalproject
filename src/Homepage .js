import CallToAction from './CallToAction';
import Chicago from './Chicago';
import CustomersSay from './CustomersSay ';
import Specials from './Specials';

const SPECIALSC = [
    {
        "background": "/greeksalad.jpg",
        "title": "Greek Salad",
        "price": "12.00",
        "description": "The famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        "background": "/bruchetta.svg",
        "title": "Bruchetta",
        "price": "5.99",
        "description": "Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        "background": "/lemondessert.jpg",
        "title": "Lemon Dessert",
        "price": "5.00",
        "description": "This comes straight from grandma’s recipe book. every last ingredient has been sourced is as authentic as can be imagined."
    }
]

const TESTIMONIALS = [
    {
        "name": "John Doe",
        "say": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.",
        "image": "/John_Doe.jpg",
        "rate": "5"
    },
    {
        "name": "John Doe",
        "say": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.",
        "image": "/John_Doe.jpg",
        "rate": "5"
    },
    {
        "name": "John Doe",
        "say": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.",
        "image": "/John_Doe.jpg",
        "rate": "5"
    },
    {
        "name": "John Doe",
        "say": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos temporibus adipisci iure consectetur veniam incidunt.",
        "image": "/John_Doe.jpg",
        "rate": "5"
    }
]
function HomePage(props) {
    return (
        <main>
            <section id='specials'>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>This Week Specials</h1>
                        </div>
                        <div className="col-4 text-right">
                            <CallToAction st="Online Menu" href="#" />
                        </div>
                    </div>
                    <div className="row">
                        {
                            SPECIALSC.map(function (special) {
                                return (
                                    <Specials background={special.background} title={special.title} price={special.price} description={special.description} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section id="testimonials" className="dark-green">
                <div className="container">
                    <h1 className="text-center py-3 ">Testimonials</h1>
                    <div className="row">
                        {
                            TESTIMONIALS.map(function (testimonial) {
                                return (
                                    <CustomersSay name={testimonial.name} image={testimonial.image} say={testimonial.say} rate={testimonial.rate} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <Chicago />
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

export default HomePage;