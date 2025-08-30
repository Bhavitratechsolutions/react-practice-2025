import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "We build modern, responsive, and scalable websites tailored to your business needs.",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Mobile Apps",
      desc: "Custom iOS & Android applications with smooth performance and beautiful UI.",
      icon: "📱",
    },
    {
      id: 3,
      title: "Digital Marketing",
      desc: "Boost your brand visibility with SEO, social media marketing, and paid campaigns.",
      icon: "📢",
    },
    {
      id: 4,
      title: "UI/UX Design",
      desc: "User-focused designs that provide seamless experiences across all devices.",
      icon: "🎨",
    },
  ];

  return (
    <div className="py-5 min-vh-100">
      <Container>
        <h1 className="fw-bold text-center text-primary mb-5">Our Services</h1>
        <Row className="g-4">
          {services.map((service) => (
            <Col key={service.id} md={6} lg={3}>
              <Card className="h-100 text-center shadow-sm rounded-4 border-0">
                <Card.Body>
                  <div className="display-4 mb-3">{service.icon}</div>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.desc}</Card.Text>
                  <Button variant="primary" size="sm">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
