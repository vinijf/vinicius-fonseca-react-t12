import React from "react";
import "./App.css";
import Artigos from "./components/Artigos";
import ArtigoCreate from "./components/ArtigoCreate";
import ArtigoShow from "./components/ArtigoShow";
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
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
