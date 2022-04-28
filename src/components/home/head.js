import { React } from "react";
import coverImage from "../../assets/images/bedCover.png";
import { makeStyles } from "@mui/styles";
import { Typography, Link } from "@mui/material";

const useStyles = makeStyles({
  headWrapper: {
    position: "relative",
  },
  headImage: {
    width: "100%",
  },
  content: {
    position: "absolute",
    top: "10%",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  ContentText: {
    "@media (max-width:600px)": {
      width: "37%",
    },
    "@media (min-width:600px)": {
      width: "37%",
    },
    "@media (min-width:900px)": {
      width: "40%",
    },
    "@media (min-width:1200px)": {
      width: "40%",
    },
  },
  subContent: {
    position: "absolute",
    bottom: "10%",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
});

const Head = () => {
  const classes = useStyles();

  return (
    <div className={classes.headWrapper}>
      <img src={coverImage} alt="bed" className={classes.headImage} />
      <div className={classes.content}>
        <Typography variant="h2" className={classes.ContentText}>
          Super Soft, Stylish Bed Linen Made With Love
        </Typography>{" "}
      </div>
      <div className={classes.subContent}>
        <Link underline="none" variant="subtitle1">
          EXPLORE
        </Link>
      </div>
    </div>
  );
};

export default Head;
