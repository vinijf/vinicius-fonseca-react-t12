import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Artigos from "./components/Artigos";
import ArtigoCreateOrUpdate from "./components/ArtigoCreateOrUpdate";
import ArtigoShow from "./components/ArtigoShow";
import Comentarios from "./components/Comentarios";
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
              component={ArtigoCreateOrUpdate}
            ></Route>
            <Route
              path="/artigo/update/:id"
              component={ArtigoCreateOrUpdate}
            ></Route>
            <Route path="/artigo/show/:id" component={ArtigoShow}></Route>
            <Route path="/comentarios" component={Comentarios}></Route>
            <Route path="/sobre" component={Sobre}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
