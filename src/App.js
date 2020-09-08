import React from "react";
import { Switch, Route } from "react-router-dom";
// Import global styles and theme options
import { GlobalStyles } from "./assets/styles/GlobalStyle";
import Theme from "./assets/styles/Theme";
// Import navbar and footer
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
// Import pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Projects from "./pages/project/Projects";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <div className="App">
      <Theme>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skils" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
