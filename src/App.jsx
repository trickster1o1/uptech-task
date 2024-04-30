import "./assets/main.scss";
import About from "./components/about";
import Contact from "./components/contact";
import Featured from "./components/featured";
import Footer from "./components/footer";
import Header from "./components/header";
import ClientStory from "./components/story";

function App() {
  return (
    <>
      <Header />
      <About />
      <Featured />
      <ClientStory />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
