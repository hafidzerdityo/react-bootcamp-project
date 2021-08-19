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
import Default from "./components/Default";

function App() {
  return (
    <>
      <Navbar brand={"void8"} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bootcamp" component={Bootcamp} />
        <Route path="/immersivejs" component={ImmersiveJs} />
        <Route path="/flexjs" component={FlexJs} />
        <Route path="/datascience" component={DataScience} />
        <Route path="/datascience" component={DataScience} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
