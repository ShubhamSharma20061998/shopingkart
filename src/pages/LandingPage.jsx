import React, { lazy, Suspense } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./LandingPage.module.css";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const BestSellers = lazy(() => import("./landing-subpages/BestSellers"));
const FeaturedProducts = lazy(() =>
  import("./landing-subpages/FeaturedProducts")
);

const LandingPage = () => {
  const carousel_image = [
    "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <>
      <Carousel fade>
        {carousel_image.map(carousel_image => {
          return (
            <Carousel.Item key={carousel_image}>
              <img
                className={`d-block w-100 ${styles.carousel_image_landingPage}`}
                src={carousel_image}
                alt="slide"
                loading="lazy"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        <section className={`${styles.featured_products}`}>
          <FeaturedProducts />
        </section>
      </Suspense>
      <Suspense
        fallback={
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        }
      >
        <section className="featured_products">
          <BestSellers className={styles.BestSellers} />
        </section>
      </Suspense>
    </>
  );
};

export default LandingPage;
