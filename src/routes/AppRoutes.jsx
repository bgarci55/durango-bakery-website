import { Route, Routes } from "react-router-dom";

import AboutPage from "../features/about/AboutPage";
import ContactPage from "../features/contact/ContactPage";
import HomePage from "../features/home/HomePage";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    );
}
