import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bootcamp from "./components/Bootcamp";
import ImmersiveJs from "./components/ImmersiveJs";
import FlexJs from "./components/FlexJs";
import DataScience from "./components/DataScience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar brand={"void8"} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bootcamp" component={Bootcamp} />
        <Route exact path="/immersivejs" component={ImmersiveJs} />
        <Route exact path="/flexjs" component={FlexJs} />
        <Route exact path="/datascience" component={DataScience} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
