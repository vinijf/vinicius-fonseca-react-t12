import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Artigos from "./components/Artigos";
import ArtigoCreate from "./components/ArtigoCreate";
import ArtigoShow from "./components/ArtigoShow";
import Sobre from "./components/Sobre";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Artigos}></Route>
            <Route path="/artigos" component={Artigos}></Route>
            <Route
              path="/artigo/create"
              component={ArtigoCreate}
            ></Route>
            <Route path="/artigo/show/:id" component={ArtigoShow}></Route>
            <Route path="/sobre" component={Sobre}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
