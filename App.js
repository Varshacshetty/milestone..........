// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import TravelGuideDetails from './TravelGuideDetails'; 
import React from 'react';
import {
	BrowserRouter as Router,
	Routes, Route as RouteElement,
	Link
} from 'react-router-dom';
import {
	Navbar, Nav,
	NavDropdown, Carousel
} from 'react-bootstrap';
import DestinationList from './DestinationList';
import DestinationDetail from './DestinationDetail';
import ContactForm from './ContactForm';
// Import the custom CSS file
import './App.css';

const App = () => {
	return (
		<Router>
			<div>
        <Navbar className="custom-navbar" expand="lg">
          <Navbar.Brand className="brand-heading">NAMMA KUDLA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              
              {/* Add a direct link to Guides outside of the dropdown */}
              <Link to="/guides" className="nav-link">Guides</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* Carousel */}
        <Carousel className="custom-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://adventurebuddha.com/wp-content/uploads/2020/05/Kaup-Beach-Vivek-Raj_2-1024x530.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://s3.ap-south-1.amazonaws.com/zoom-blog-image/2016/03/rameswaram-temple-history.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://static.vecteezy.com/system/resources/previews/011/127/621/non_2x/beautiful-sea-waves-and-white-sand-beach-in-the-tropical-island-soft-waves-of-blue-ocean-on-sandy-beach-background-from-top-view-from-drones-concept-of-relaxation-and-travel-on-vacation-free-photo.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://media.geeksforgeeks.org/wp-content/uploads/20240105125539/4th.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
        <br />
		
        {/* Content of your app (unchanged) */}
        <Routes>
          <RouteElement path="/" element={<DestinationList />} />
          <RouteElement path="/destination/:id" element={<DestinationDetail />} />
          <RouteElement path="/contact" element={<ContactForm />} />
          {/* Route for guides to open in a separate page */}
          <RouteElement path="/guides" element={<TravelGuideDetails />} />
          {/* Add routes for travel, destinations, and experience */}
        </Routes>
        {/* Footer */}
        <div className="custom-footer">
          <div className="footer-section">
            <h3>Connect with us</h3>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact us</h3>
            <p>Email: contact@incredibleindia.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
