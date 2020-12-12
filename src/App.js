import logo from "./logo.svg";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Profucts";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/">
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
