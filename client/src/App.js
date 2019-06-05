import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import CreateItem from "./components/items/CreateItem";
import RegisterComponent from "./components/user/RegisterComponent";
import HomeComponent from "./components/HomeComponent";
import ItemsComponent from "./components/items/ItemsComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/user/create" component={RegisterComponent}></Route>
            <Route exact path="/items/" component={ItemsComponent}></Route>
            <Route exact path="/items/create" component={CreateItem}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
