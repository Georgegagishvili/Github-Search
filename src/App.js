import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage";
import DetailsPage from "./pages/details-page/DetailsPage";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/detailed/">
            <DetailsPage></DetailsPage>
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
