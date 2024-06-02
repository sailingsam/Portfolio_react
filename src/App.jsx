import "./App.css";
import Home from "./components/HomeSection/Home";
import MyExpertise from "./components/MyExpertiseSection/MyExpertise";
import Work from "./components/WorkSection/Work";
import Experience from "./components/ExperienceSection/Experience";
import Header from "./components/navigationbar/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <MyExpertise />
        <Work />
        <Experience />
      </div>
    </div>
  );
}

export default App;
