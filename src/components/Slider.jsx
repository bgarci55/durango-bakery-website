import { Slide } from "react-slideshow-image";

import slideImages from "../assets/images.js";
import "../styles/Slider.css";

export default function Slider() {
    return (
        <div className="container">
            <Slide easing="ease">
                {slideImages.map((slide, index) => {
                    return (
                        <div className="slide" key={slide}>
                            <div
                                style={{
                                    backgroundImage: `url(${slideImages[index]})`,
                                }}
                            >
                                <span>Slide {index + 1}</span>
                            </div>
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
}
