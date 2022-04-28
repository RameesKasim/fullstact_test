import { React, useEffect, useState } from "react";
import bathRobeImage from "../../assets/images/bathRobes.png";
import homeFragranceImage from "../../assets/images/homeFragrances.png";
import bedLineImage from "../../assets/images/bedLinens.png";
import bathTowelImage from "../../assets/images/bathTowels.png";
import productOneImage from "../../assets/images/ProductOne.png";
import productTwoImage from "../../assets/images/ProductTwo.png";
import productThreeImage from "../../assets/images/ProductThree.png";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid, Button } from "@mui/material";

const useStyles = makeStyles({
  ItemWrapper: {
    margin: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "100%",
  },
  imageWrapper: {
    position: "relative",
  },
  itemButtton: {
    position: "absolute",
    bottom: "10%",
    left: "31%",
  },
  offerText: {
    "@media (max-width:600px)": {
      fontSize: ".2rem",
    },
    "@media (min-width:600px)": {
      fontSize: ".4rem",
    },
    "@media (min-width:1200px)": {
      fontSize: ".8rem",
    },
  },
});

const Items = () => {
  const [description, setDescribtion] = useState(null);
  const [items, setItems] = useState(null);
  const [bestSellers, setBestSellers] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setDescribtion(
      "Our premium products got the finest quality cotton that create an exquisite lightweight textile that’s both soft and crisp – guaranteed to give you a wonderful night’s sleep."
    );
    setItems([
      { name: " Bed Linens", image: bedLineImage },
      { name: " Bath Towels", image: bathTowelImage },
      { name: " Bath Robes", image: bathRobeImage },
      { name: " Home Fragrances", image: homeFragranceImage },
    ]);

    setBestSellers([
      {
        name: "Towel One",
        price: "AED 120",
        message: "Available in 5 colours",
        image: productOneImage,
        offer: null,
      },
      {
        name: "Towel Two",
        price: "AED 110",
        offer: `25%`,
        message: null,
        image: productTwoImage,
      },
      {
        name: "Towel One",
        price: "AED 120",
        offer: null,
        message: "Available in 3 colours",
        image: productThreeImage,
      },
    ]);
  }, []);

  return (
    <Box className={classes.ItemWrapper}>
      <Typography variant="caption">{description}</Typography>
      <Grid container columns={12}>
        {items &&
          items.map((item, key) => (
            <Grid key={key} item xs={6}>
              <div className={classes.imageWrapper}>
                <img
                  src={item.image}
                  alt="product "
                  className={classes.image}
                />
                <div className={classes.itemButtton}>
                  <Button variant="contained" color="itemButton">
                    <Typography variant="subtitle2">{`Shop ${item.name}`}</Typography>
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
      </Grid>
      <Typography variant="h3">Best Sellers</Typography>
      <Grid container columns={12} spacing={2}>
        {bestSellers &&
          bestSellers.map((item, key) => (
            <Grid item xs={4} key={key}>
              <img src={item.image} alt="Product " style={{ width: "80%" }} />
              <Typography variant="subtitle2">{item.name}</Typography>
              <Typography variant="subtitle1" style={{ color: "#303030" }}>
                {item.price}
              </Typography>
              {item.offer && (
                <Typography variant="subtitle1" className={classes.offerText}>
                  <span style={{ color: "#D9C8B2" }}>Special Offer</span>
                  {` Get ${item.offer} OFF`}
                </Typography>
              )}
              {item.message && (
                <Typography variant="subtitle1" className={classes.offerText}>
                  {item.message}
                </Typography>
              )}
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Items;
