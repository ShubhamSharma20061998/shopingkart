import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  let featured_products = [
    {
      src: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
      title: "WATCH",
      category: "watch",
    },
    {
      src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
      title: "EAT TO READY",
      category: "sadasd",
    },
    {
      src: "https://images.pexels.com/photos/1616097/pexels-photo-1616097.jpeg",
      title: "ORNAMENTS",
      category: "sadasd",
    },
    {
      src: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg",
      title: "CAMERA",
      category: "sadasd",
    },
  ];
  return (
    <>
      <h3>FEATURED PRODUCTS</h3>
      <div className={`row container ${styles.card_container}`}>
        {featured_products?.map(product => {
          let { src, title, category } = product;
          return (
            <div className="col-md-3">
              <Card key={src} className={styles.cards}>
                <Card.Img
                  className={styles.card_img}
                  variant="top"
                  src={src}
                  loading="lazy"
                />
                <Card.Body>
                  <Card.Title className={styles.title}>{title}</Card.Title>
                  <Card.Text>{category}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProducts;
