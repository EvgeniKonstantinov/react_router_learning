import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const About = () => {
  return <h2>About</h2>;
};

const Topic = ({ match }) => {
  return <h3>Requested Param: {match.params.id}</h3>;
};

const Home = () => <div>Home</div>;

const App = () => {
  const someVariable = true;

  return (
    <Switch>
      {/* these are good */}
      <Route exact path="/" component={Home} />
      <Route
        path="/about"
        render={props => <About {...props} extra={someVariable} />}
      />
    </Switch>
  );
};
export default App;
