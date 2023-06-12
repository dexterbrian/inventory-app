import Home from "./home/Home";
import About from './about/About';
import Footer from './footer/Footer';
import Service from "./services/Service";

function Welcome( { setLoggedIn, setNotification }) {
    return (
        <div>
            <Home />
            <About />
            <Service />
            <Footer />
        </div>
    );
}

export default Welcome;