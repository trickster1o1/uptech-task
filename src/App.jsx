import "./assets/main.scss";
import About from "./components/about";
import Featured from "./components/featured";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <div>
        <About />
        <Featured />
      </div>
    </>
  );
}

export default App;
