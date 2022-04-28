import { Fragment, React, useState, useEffect } from "react";
import coinIcon from "../../assets/images/coin.svg";
import starIcon from "../../assets/images/star.svg";
import candleIcon from "../../assets/images/candle.svg";
import clothStackIcon from "../../assets/images/clothStack.svg";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Grid } from "@mui/material";

const useStyles = makeStyles({
  featureWrapper: {
    padding: "5% 0%",
    textAlign: "center",
    backgroundColor: "#F1F0EC",
  },
  icon: {
    width: "40%",
  },
  featureCover: {
    backgroundColor: "#ffff",
    padding: "0 5% ",
  },
  itemTitle: {
    padding: "5% 0%",
  },
  descWrapper: {
    margin: "0 5%",
    backgroundColor: "",
  },
  titleWrapper: {
    padding: "0 5% ",
  },
  descripton: {
    color: "black !important",
    padding: "3%",
  },
});

const Features = () => {
  const classes = useStyles();
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems([
      {
        title: "Quality Products",
        icon: clothStackIcon,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      },
      {
        title: "Lifetime Warranty",
        icon: starIcon,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      },
      {
        title: "Stress-free Shopping",
        icon: candleIcon,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      },
      {
        title: "Faie Price",
        icon: coinIcon,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      },
    ]);
  }, []);

  return (
    <Fragment>
      <Box className={classes.featureWrapper}>
        <Typography variant="h3" style={{ color: "#141414" }}>
          Your Comfort Is Our #1 Priority
        </Typography>
        <Grid container columns={12} className={classes.featureCover}>
          {items &&
            items.map((item, key) => (
              <Grid key={key} item xs={3}>
                <img src={item.icon} className={classes.icon} alt="icons" />
              </Grid>
            ))}
        </Grid>

        <Grid container columns={12} className={classes.titleWrapper}>
          {items &&
            items.map((item, key) => (
              <Grid key={key} item xs={3}>
                <Typography variant="subtitle2" className={classes.itemTitle}>
                  {item.title}
                </Typography>
              </Grid>
            ))}
        </Grid>
        <div className={classes.descWrapper}>
          <Grid container columns={12} style={{ backgroundColor: "#d4d4d6" }}>
            {items &&
              items.map((item, key) => (
                <Grid key={key} item xs={3}>
                  <Typography
                    variant="subtitle1"
                    className={classes.descripton}
                  >
                    {item.des}
                  </Typography>
                </Grid>
              ))}
          </Grid>
        </div>
      </Box>
    </Fragment>
  );
};

export default Features;
