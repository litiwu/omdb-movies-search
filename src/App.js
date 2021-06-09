import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={MovieInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
