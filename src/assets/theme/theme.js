import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "BrownStdRegular,BrownStdLight,BrownStdBold,BigCaslonMedium",
    h1: {
      fontFamily: "BrownStdRegular",
      color: "#737373",
    },
    h2: {
      fontFamily: "BigCaslonMedium",
      color: "#6A6A6A",
      "@media (max-width:600px)": {
        fontSize: ".8rem",
      },
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontFamily: "BigCaslonMedium",
      color: "#494949",
      textAlign: "center",
      margin: "1rem,0rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.25rem",
      },
    },
    h4: {},
    h5: {
      fontFamily: "BrownStdBold",
      color: "#737373",
      fontSize: "1.34rem",
      "@media (max-width:600px)": {
        fontSize: ".3rem",
      },
      "@media (min-width:600px)": {
        fontSize: ".6rem",
      },

      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1.3rem",
      },
    },
    h6: {
      fontFamily: "BrownStdRegular",
      "@media (max-width:600px)": {
        fontSize: ".3rem",
      },
      "@media (min-width:600px)": {
        fontSize: ".6rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      color: "#737373",
    },
    subtitle1: {
      fontFamily: "BrownStdLight",
      color: "#BFBFBF ",
      "@media (max-width:600px)": {
        fontSize: ".3rem",
      },
      "@media (min-width:600px)": {
        fontSize: ".6rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
    },
    subtitle2: {
      fontFamily: "BrownStdBold",
      fontSize: "1.34rem",
      "@media (max-width:600px)": {
        fontSize: ".3rem",
      },
      "@media (min-width:600px)": {
        fontSize: ".6rem",
      },

      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "1.3rem",
      },
      color: "#737373",
    },
    caption: {
      fontFamily: "BigCaslonMedium",
      textAlign: "center",
      marginBottom: "1.5rem",
      "@media (max-width:600px)": {
        fontSize: ".9rem",
        width: "90%",
      },
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
        width: "80%",
      },
      "@media (min-width:900px)": {
        fontSize: "1.6rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2rem",
      },
      color: "#494949",
    },
    button: {
      fontFamily: "BrownStdLight",
      "@media (max-width:600px)": {
        fontSize: ".5rem",
      },
      "@media (min-width:600px)": {
        fontSize: ".6rem",
      },
      "@media (min-width:1200px)": {
        fontSize: ".7rem",
      },
    },
  },

  palette: {
    primary: {
      main: "#707070",
      contrastText: "white",
    },
    secondary: {
      contrastText: "black",
      main: "#737373",
    },
    itemButton: {
      main: "#fff",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          "@media (max-width:600px)": {
            fontSize: ".5rem",
            padding: "0rem",
          },
          "@media (min-width:600px)": {
            fontSize: ".6rem",
          },
          "@media (min-width:1200px)": {
            fontSize: ".7rem",
          },
        },
      },
    },
  },
});

export default theme;
