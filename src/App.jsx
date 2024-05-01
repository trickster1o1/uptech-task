import { useEffect } from "react";
import "./assets/main.scss";
import About from "./components/about";
import Contact from "./components/contact";
import Featured from "./components/featured";
import Footer from "./components/footer";
import Header from "./components/header";
import Service from "./components/services";
import ClientStory from "./components/story";

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById('splash').style.opacity = '0';
      document.getElementById('splash').style.zIndex = '-1';
    }, 2500);
  }, []);
  return (
    <>
    <div className="splash" id="splash">
      <h1 className="custom-header">Business Logo</h1>
    </div>
      <Header />
       <About />
      <Service />
      <Featured />
      <ClientStory />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
