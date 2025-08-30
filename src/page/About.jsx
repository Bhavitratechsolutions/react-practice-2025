import { Container, Row, Col, Button } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid className="py-5 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left side - content */}
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-primary">About Us</h1>
            <p className="lead text-muted mt-3">
              Welcome to <strong>YourCompany</strong>!  
              We are passionate about delivering high-quality digital solutions 
              that help businesses grow and succeed in today’s fast-paced world. 
            </p>
            <p className="text-secondary">
              Our team specializes in modern web development, design, and digital 
              marketing strategies tailored to your needs. With years of experience, 
              we focus on creating user-friendly and scalable solutions. 
            </p>
            <Button variant="primary" size="lg" className="mt-3">
              Contact Us
            </Button>
          </Col>

          {/* Right side - random image */}
          <Col md={6} className="text-center">
            <img
              src="https://weblium.com/blog/wp-content/uploads/2021/05/19-Best-About-Me-Page-Examples-and-How-to-Write-a-Killer-About-Me-Page-1-1-1.png"
              alt="About Us"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
