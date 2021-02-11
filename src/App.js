import React from "react";
import "./styles.css";
import Header from "./components/header";
import { Route, Switch } from "react-router-dom";
import TodosList from "./components/TodosList";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import visibilityFilter from "./components/visibilityFilter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/todolist" component={TodosList} />
          <Route exact path="/visibilityfilter" component={visibilityFilter} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    );
  }
}
export default App;
