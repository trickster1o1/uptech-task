import "./assets/main.scss";
import About from "./components/about";
import Featured from "./components/featured";
import Header from "./components/header";
import ClientStory from "./components/story";

function App() {
  return (
    <>
      <Header />
      <div>
        <About />
        <Featured />
        <ClientStory />
      </div>
    </>
  );
}

export default App;
