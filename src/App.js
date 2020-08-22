import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Artigos from "./components/Artigos";
import ArtigoShow from "./components/ArtigoShow";
import Sobre from "./components/Sobre";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/artigos" component={Artigos}></Route>
            <Route path="/artigo/show/:id" component={ArtigoShow}></Route>
            <Route path="/sobre" component={Sobre}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
