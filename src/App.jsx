import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
