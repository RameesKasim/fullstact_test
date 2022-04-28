import { React } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import { Box } from "@mui/system";
import footerImageOne from "../../assets/images/footerImageOne.png";
import footerImageTwo from "../../assets/images/footerImageTwo.png";
import footerImageThree from "../../assets/images/footerImageThree.png";
import footerImageFour from "../../assets/images/footerImageFour.png";

const useStyles = makeStyles({
  footWrapper: {
    padding: "5% 0",
  },
  followUs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2px",
  },
  icon: {
    "@media (max-width:600px)": {
      fontSize: ".5rem !important ",
      padding: "0rem .20rem",
    },
    "@media (min-width:600px)": {
      fontSize: ".7rem !important",
      padding: "0rem .30rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "1.5rem !important",
      padding: "0rem .5rem",
    },
  },
  image: {
    width: "100%",
  },
});

const Foot = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footWrapper}>
      <Link underline="none" className={classes.followUs}>
        <Typography variant="h6">FOLLOW US ON</Typography>
        <Instagram className={classes.icon} color="primary" />
      </Link>
      <Grid container>
        <Grid item xs={3}>
          <img className={classes.image} src={footerImageOne} />
        </Grid>
        <Grid item xs={3}>
          <img className={classes.image} src={footerImageTwo} />
        </Grid>
        <Grid item xs={3}>
          <img src={footerImageThree} className={classes.image} />
        </Grid>
        <Grid item xs={3}>
          <img src={footerImageFour} className={classes.image} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Foot;
