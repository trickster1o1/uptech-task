import "./assets/main.scss";
import About from "./components/about";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div className="cont">
        <About />
      </div>
    </>
  );
}

export default App;
