import { useState } from "react";

import "../styles/Slider.css";

import ForwardArrow from "../assets/SVG/forwardArrow.js";
import BackwardArrow from "../assets/SVG/backwardArrow.js";

export default function Slider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slide = slides[currentIndex];

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return <>
        <div className="container">
            <button
                className="arrow"
                onClick={goToNextSlide}
            >
                <span className="icon">
                    <ForwardArrow />
                </span>
            </button>

            <div className="slider">
                <img
                    src={slide}
                    className="slider-image"
                />
            </div>


            <button
                className="arrow"
                onClick={goToPreviousSlide}
            >
                <span className="icon">
                    <BackwardArrow />
                </span>
            </button>
        </div>
    </>;
}
