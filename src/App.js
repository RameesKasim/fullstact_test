import { React } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme/theme";
import Home from "./components/home";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
