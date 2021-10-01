import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  AppOne,
  SalesCouponsPage,
} from "./components";
import SalesPage from "./components/SalesPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/appone">
            <AppOne />
          </Route>
          <Route path="/salesCoupons">
            <SalesCouponsPage />
          </Route>
          <Route path="/SalesPage">
            <SalesPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
