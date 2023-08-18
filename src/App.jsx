import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
import GoToTop from "./components/GoToTop";
// import prot from "./prot";
import Protf from "./Protf";
import Teams from "./Teams";
import Testx from "./Testx";

const App = () => {
  const theme = {
    colors: {
      heading: "#FFA500", // Primary Orange
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#FF6347", // Tertiary Orange
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "#FF4500", // Accent Orange (Button color)
      border: "rgba(255, 69, 0, 0.5)", // Accent Orange (with alpha)
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/test2/" element={<Home />} />
          <Route path="/test2/about" element={<About />} />
          <Route path="/test2/service" element={<Services />} />
          <Route path="/test2/contact" element={<Contact />} />
          {/* <Route path="/Prot" element ={<Prot/>} /> */}
          <Route path="/Treams" element={<Teams/>} />
          <Route path="/Testx" element={<Testx/>} />
          <Route path="/test2/Protf" element={<Protf/>} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
