import { React } from "react";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const useStyles = makeStyles({
  footerContainer: {
    "@media (max-width:600px)": {
      padding: "1rem ",
    },
    "@media (min-width:600px)": {
      padding: "1rem 3.5rem",
    },
  },
  footWrapper: {
    marginTop: "1rem !important",
  },
});

const menus = ["About Us", "Contact Us", "Track My Order", "FAQ"];
const items = ["Bed Linen", "Bath Towels", "Bathrobes", "Home Fragrances"];

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footerContainer}>
      <Grid item xs={3}>
        <Typography variant="h6">OUR STORY</Typography>
        <Typography className={classes.footWrapper} variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiuxsod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <Grid display="flex" justifyContent="space-between" item xs={4}>
            <Facebook fontSize="small" />
            <Twitter fontSize="small" />
            <Instagram fontSize="xsall" />
          </Grid>
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <Typography variant="h6">MORE..</Typography>
        {menus.map((menuItem, key) => (
          <div key={key} className={key === 0 ? classes.footWrapper : ""}>
            <Link underline="none" variant="subtitle1">
              {menuItem}
            </Link>
          </div>
        ))}
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h6">SHOP</Typography>
        {items.map((shopItem, key) => (
          <div key={key} className={key === 0 ? classes.footWrapper : ""}>
            <Link underline="none" variant="subtitle1">
              {shopItem}
            </Link>
          </div>
        ))}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={3} md={3}>
        <div>
          <Typography variant="h6">NEWS LETTER</Typography>
        </div>
        <div>
          <Typography variant="subtitle1" className={classes.footWrapper}>
            Subscribe to recieve updates,access to exclusive deals, and more{" "}
          </Typography>
        </div>
        <Grid container columns={12} className={classes.footWrapper}>
          <Grid item xs={6} sm={6}>
            <TextField
              fullWidth
              placeholder="Enter your email address"
              size="small"
            />
          </Grid>
          <Grid xs={6} sm={6} alignItems="stretch" display="flex" item>
            <Button
              style={{ borderRadius: "0" }}
              variant="contained"
              color="secondary"
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
