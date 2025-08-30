import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container fluid className="py-5 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="p-5 shadow rounded-4 bg-white">
              <h1 className="fw-bold text-center mb-4 text-primary">Contact Us</h1>
              <p className="text-center text-muted mb-4">
                We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
              </p>

              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                {/* Message */}
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                </Form.Group>

                {/* Submit Button */}
                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
