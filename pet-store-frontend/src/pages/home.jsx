import React from "react";
import Slider from "react-slick"; // Import React-Slick
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme
import "./Home.css";

const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768, // Tablet and smaller
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480, // Mobile and smaller
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    dots: false, // Optional: remove dots on smaller screens
                },
            },
        ],
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar-logo">Pet Store</div>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery">Pets</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>

            {/* Image Slider */}
            <div className="slider-container">
                <Slider {...sliderSettings}>
                    <div className="slide">
                        <img src="/images/pets.jpg" alt="Welcome" />
                        <div className="slider-content">
                            <h2>Welcome to Pet Store</h2>
                            <p>Your one-stop destination for loving pets and accessories.</p>
                        </div>
                    </div>
                    <div className="slide">
                        <img src="/images/rabbits.jpg" alt="Find Your Pet" />
                        <div className="slider-content">
                            <h2>Find Your Perfect Companion</h2>
                            <p>Browse our gallery to find your furry, feathery, or scaly friend!</p>
                        </div>
                    </div>
                    <div className="slide">
                        <img src="/images/dogs.jpg" alt="Shop Accessories" />
                        <div className="slider-content">
                            <h2>Shop Pet Accessories</h2>
                            <p>Get high-quality pet products at unbeatable prices.</p>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* About Us Section */}
            <div id="about" className="about-section">
                <h2>About Us</h2>
                <p>
                    At Pet Store, we help you find your best furry friend. Our mission is
                    to connect loving pets with caring owners.
                </p>
            </div>

            {/* Pet Gallery Section */}
            <div id="gallery" className="gallery-section">
                <h2>Our Pets</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/150" alt="Pet 1" />
                        <p>Golden Retriever</p>
                    </div>
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/150" alt="Pet 2" />
                        <p>Persian Cat</p>
                    </div>
                    <div className="gallery-item">
                        <img src="https://via.placeholder.com/150" alt="Pet 3" />
                        <p>Parrot</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <p>Email: contact@petstore.com</p>
                <p>Phone: +1-800-PET-LOVE</p>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Pet Store. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Home;
