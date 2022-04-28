import { React } from "react";
import { Grid, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../../assets/images/logo.png";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

const useStyles = makeStyles({
  navbarContainer: {
    "@media (max-width:600px)": {
      padding: "1rem ",
    },
    "@media (min-width:600px)": {
      padding: "1rem 3.5rem",
    },
    alignItems: "center",
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
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.navbarContainer}>
      <Grid item xs={3}>
        <Grid container columns={12}>
          <Grid item display="flex" alignItems="center" xs={4}>
            <Link underline="none" variant="h6">
              SHOP
            </Link>
          </Grid>
          <Grid display="flex" alignItems="center" item xs={4}>
            <Link underline="none" variant="h6">
              OUR STORY
            </Link>
          </Grid>
          <Grid display="flex" alignItems="center" item xs={4}>
            <Link underline="none" variant="h6">
              EXPERTISE
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ textAlign: "center" }} xs={6}>
        <Link>
          <img alt="logo" src={Logo} style={{ width: "25%" }} />
        </Link>
      </Grid>
      <Grid display="flex" alignItems="center" item xs={3}>
        <Grid container columns={12}>
          <Grid
            item
            xs={6}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Link underline="none" variant="h6">
              CONTACT
            </Link>
          </Grid>
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            xs={6}
          >
            <Link>
              <SearchOutlined
                className={classes.icon}
                onClick={() => {}}
                color="primary"
              />
            </Link>
            <Link>
              <PersonOutlineOutlined className={classes.icon} color="primary" />
            </Link>
            <Link>
              <ShoppingCartOutlined className={classes.icon} color="primary" />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
