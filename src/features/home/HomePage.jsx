import "../../styles/HomePage.css";
import "../../styles/colors.css";

import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Slider from "../../components/Slider.jsx";


import slideImages from "../../assets/images.js";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <section className="hero">
                    <h1>DURANGO BAKERY #1</h1>
                    <div className="hero-info">
                        {/* <p>3554 W Lawrence Ave, Chicago, IL 60625</p>
                        <p>(773) 539-5171</p> */}
                    </div>
                </section>

                <section className="welcome-section">
                    <h2 className="section-title">
                        Bienvenidos a Durango Bakery #1
                    </h2>
                </section>

                <div className="info-sections">
                    <section className="store-hours">
                        <h2 className="info-section-title">Horario</h2>
                        <h3> Monday - Tuesday </h3>
                        <p className="store-hours-time"> 7:30am - 8pm </p>
                        <h3> Wednesday - Sunday </h3>
                        <p className="store-hours-time"> 7:30am - 9pm </p>
                    </section>

                    <section className="location">
                        <h2>Información</h2>
                        <p>3554 W Lawrence Ave, Chicago, IL 60625</p>
                        <p>(773) 539-5171</p>
                    </section>
                </div>

                <section className="showcase-section">
                    <h2 className="section-title">Artisan Mexican Bread</h2>
                    <Slider slides={slideImages} />
                    <p className="section-description">
                        Durango Bakery #1 es una panadería artesanal mexicana
                        ubicada en el corazón de Chicago. Nos especializamos en
                        ofrecer una amplia variedad de panes tradicionales
                        mexicanos, elaborados con ingredientes frescos y de alta
                        calidad. Desde nuestros clásicos conchas y cuernitos
                        hasta nuestras deliciosas orejas y roles de canela, cada
                        producto es hecho a mano con amor y dedicación para
                        brindar a nuestros clientes una experiencia auténtica y
                        deliciosa.
                    </p>
                </section>
            </main>

            <Footer />
        </>
    );
}
