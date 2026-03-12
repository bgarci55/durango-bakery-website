import slideImages from "../assets/images.js";
import "../styles/Slider.css";

import ForwardArrow from "../assets/SVG/forwardArrow.js";
import BackwardArrow from "../assets/SVG/backwardArrow.js";

export default function Slider() {
    return <>
        <div>

            <button>
                <span>
                    <ForwardArrow />
                </span>
            </button>
            <div className="container">
                {slideImages.map((slide, index) => {
                    return (
                        <div className="slide" key={slide}>
                            <div
                                style={{
                                    backgroundImage: `url(${slideImages[index]})`,
                                }}
                            >
                                <span></span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button>
                <span>
                    <BackwardArrow />
                </span>
            </button>
        </div>
    </>;
}
