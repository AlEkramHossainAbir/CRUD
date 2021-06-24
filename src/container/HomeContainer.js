import Nav from "../components/Navbar";
import Content from "../components/Content";
import { Provider } from "react-redux";
import React from "react";
import store from "../Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";

const HomeContainer = () => {
  return (
    <Provider store={store}>
        <Router>
      <Nav />
      <div className="container">
        <div className="py-3">
          <Switch>
              <Route exact path="/" component={Content} />
            {/* <Content /> */}
            <Route exact path="/components/addContact" component={AddContact} />
            <Route exact path="/components/edit/:id" component={EditContact} />
            {/* <Route exact path="/components/delete" /> */}
          </Switch>
        </div>
      </div>
      </Router>
    </Provider>
  );
};

export default HomeContainer;
