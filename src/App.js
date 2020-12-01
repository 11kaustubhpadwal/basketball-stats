import { Grid } from "@geist-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./components/homepage/Home";
import Players from "./components/players page/Players";
import Teams from "./components/teams page/Teams";
import Games from "./components/games page/Games";
import FAQ from "./components/faq page/FAQ";
import Version from "./components/shared/Version";

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Grid.Container
        gap={2}
        style={{ padding: "10px 30px" }}
        alignItems="center"
      >
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/players">
              <Players />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route exact path="/games">
              <Games />
            </Route>
            <Route exact path="/faq">
              <FAQ />
            </Route>
          </Switch>
        </Router>
        <Version />
      </Grid.Container>
    </Provider>
  );
};

export default App;
