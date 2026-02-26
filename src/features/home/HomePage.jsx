import "../../styles/HomePage.css";

import Navbar from "../../components/Navbar.jsx";
// import Footer from "./Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <section className="hero">
                    <h1>Durango Bakery #1!</h1>
                    <div className="hero-info">
                        <p>3554 W Lawrence Ave, Chicago, IL 60625</p>
                        <p>(773) 539-5171</p>
                    </div>
                </section>

                <div className="info-sections">
                    <section className="store-hours">
                        <h2>Store Hours</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monday - Tuesday</td>
                                    <td>7:30am - 8pm</td>
                                </tr>

                                <tr>
                                    <td>Wednesday - Sunday</td>
                                    <td>7:30am - 9pm</td>
                                </tr>
                            </tbody>
                        </table>{" "}
                    </section>

                    <section className="location">
                        <h2>Location</h2>
                        <p>3554 W Lawrence Ave, Chicago, IL 60625</p>
                    </section>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    );
}
