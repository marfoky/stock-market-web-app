import "./App.css";
import LandingPage from "./views/LandingPage";
import LearnOurModelsPage from "./views/LearnOurModelsPage";
import ModelsPage from "./views/ModelsPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route Component={LandingPage} path="/" />
        <Route Component={ModelsPage} path="/models" />
        <Route Component={LearnOurModelsPage} path="/models/learn"/>
      </Routes>
    </Router>
  );
}

export default App;
