import React from "react";
import CommonHeader from "../CommonHeader/CommonHeader";
import "./Categories.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

const Categories = () => {
  // Sample category data, replace with your actual data
  const categories = [
    {
      id: 1,
      name: "Graphic Design Assets",
      imageUrl:
        "https://via.placeholder.com/300x200?text=Graphic Design Assets",
      link: "/graphic-design", // Add a link for each category
    },
    {
      id: 2,
      name: "Video Editing Assets",
      imageUrl: "https://via.placeholder.com/300x200?text=Video Editing Assets",
      link: "/video-editing",
    },
    {
      id: 3,
      name: "Web Designing Template",
      imageUrl:
        "https://via.placeholder.com/300x200?text=Web Designing Template",
      link: "/web-designing",
    },
    {
      id: 4,
      name: "Stock Images",
      imageUrl: "https://via.placeholder.com/300x200?text=Stock Images",
      link: "/stock-images",
    },
    {
      id: 5,
      name: " Stock Videos",
      imageUrl: "https://via.placeholder.com/300x200?text=Stock Videos",
      link: "/stock-videos",
    },
    {
      id: 6,
      name: "Stock Sounds",
      imageUrl: "https://via.placeholder.com/300x200?text=Stock Sounds",
      link: "/stock-sounds",
    },
    {
      id: 7,
      name: "E Books",
      imageUrl: "https://via.placeholder.com/300x200?text=E Books",
      link: "/e-books",
    },
    {
      id: 8,
      name: "Fonts",
      imageUrl: "https://via.placeholder.com/300x200?text=Fonts",
      link: "/fonts",
    },
    {
      id: 9,
      name: "Software",
      imageUrl: "https://via.placeholder.com/300x200?text=Software",
      link: "/software",
    },
    {
      id: 10,
      name: "Courses",
      imageUrl: "https://via.placeholder.com/300x200?text=Courses",
      link: "/courses",
    },
    {
      id: 11,
      name: "Mini Games",
      imageUrl: "https://via.placeholder.com/300x200?text=Mini-Games",
      link: "/mini-games",
    },
  ];

  return (
    <div>
      <CommonHeader />
      <div className="CategoriesTitle">
        <h2>Categories</h2>
      </div>

      <Container className="CardContainer">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {categories.map((category) => (
            <Col key={category.id}>
              <Link to={category.link} className="card-link">
                <Card className="card">
                  <Card.Img
                    variant="top"
                    src={category.imageUrl}
                    alt={category.name}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="card-title">
                      {category.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
