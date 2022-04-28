import { React, useState, useEffect, Fragment } from "react";
import { StarBorderOutlined, Star } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  reviewWrapper: {
    padding: "5%",
    textAlign: "-webkit-center",
  },
  review: {
    color: "#141414 !important",
    "@media (max-width:600px)": {
      width: "85% !important",
    },
    "@media (min-width:600px)": {
      width: "80% !important",
    },
    "@media (min-width:1200px)": {
      width: "60% !important",
    },
  },
});

const Content = () => {
  const [reviews, setReviews] = useState(null);
  let i = 0;

  const classes = useStyles();

  useEffect(() => {
    setReviews([
      {
        rating: 3,
        review:
          "This is the best towel set I've ever had; it's cool, comfortable and aesthetically perfect.",
      },
      {
        rating: 4,
        review:
          "This is the best towel set I've ever had; it's cool, comfortable and aesthetically perfect.",
      },
    ]);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.reviewWrapper}>
      <Slider {...settings}>
        {reviews &&
          reviews.map((item, key) => {
            return (
              <Fragment>
                <div className={classes.starWrapper}>
                  {[0, 1, 2, 3, 4].map((i, key) => {
                    if (i < item.rating)
                      return (
                        <Star key={key} color="primary" fontSize="small" />
                      );
                    else
                      return (
                        <StarBorderOutlined
                          color="primary"
                          key={key}
                          fontSize="small"
                        />
                      );
                  })}
                </div>

                <Typography variant="h3" className={classes.review}>
                  {item.review}
                </Typography>
              </Fragment>
            );
          })}
      </Slider>
    </div>
  );
};

export default Content;
