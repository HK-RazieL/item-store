import React from 'react';

import store from "./store";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar";
import CreateItem from "./components/items/CreateItem";
import RegisterComponent from "./components/user/RegisterComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <CreateItem />
        <RegisterComponent />
      </div>
    </Provider>
  );
}

export default App;
