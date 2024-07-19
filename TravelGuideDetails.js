// TravelGuideDetails.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';


const guideData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 34,
    gender: 'Female',
    nationality: 'American',
    languages: 'English, Spanish, French',
    occupation: 'Tour Guide',
    experience: '10 years',
    email: 'sarah.johnson.tours@example.com',
    phone: '+1 234-567-890',
    image: 'https://img.freepik.com/free-photo/portrait-beautiful-woman-isolated-yellow-studio-background_155003-25086.jpg?size=626&ext=jpg&ga=GA1.1.431704751.1719647485&semt=ais_user',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    age: 29,
    gender: 'Male',
    nationality: 'Indian',
    languages: 'Hindi, English, Kannada',
    occupation: 'Tour Guide',
    experience: '7 years',
    email: 'rajesh.kumar.tours@example.com',
    phone: '+91 98765 43210',
    image: 'https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?size=626&ext=jpg&ga=GA1.1.431704751.1719647485&semt=ais_user'
  },
  {
    id: 3,
    name: 'Anita Patel',
    age: 31,
    gender: 'Female',
    nationality: 'Indian',
    languages: 'English, Hindi, Tamil',
    occupation: 'Tour Guide',
    experience: '8 years',
    email: 'anita.patel.tours@example.com',
    phone: '+91 91234 56789',
    image: 'https://st2.depositphotos.com/13166358/42123/i/450/depositphotos_421230578-stock-photo-smiling-young-indian-lady-looking.jpg'
  }
];

const TravelGuideDetails = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Travel Guide Details</h1>
      <Row>
        {guideData.map(guide => (
          <Col key={guide.id} md={4} className="mb-4">
            <Card className="guide-card">
              <Card.Img variant="top" src={guide.image} alt={`Image of ${guide.name}`} />
              <Card.Body>
                <Card.Title>{guide.name}</Card.Title>
                <ul className="profile-details">
                  <li><strong>Age:</strong> {guide.age}</li>
                  <li><strong>Gender:</strong> {guide.gender}</li>
                  <li><strong>Nationality:</strong> {guide.nationality}</li>
                  <li><strong>Languages Spoken:</strong> {guide.languages}</li>
                  <li><strong>Occupation:</strong> {guide.occupation}</li>
                  <li><strong>Years of Experience:</strong> {guide.experience}</li>
                </ul>
                <div className="contact-info">
                  <p><strong>Email:</strong> <a href={`mailto:${guide.email}`}>{guide.email}</a></p>
                  <p><strong>Phone:</strong> <a href={`tel:${guide.phone}`}>{guide.phone}</a></p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TravelGuideDetails;
