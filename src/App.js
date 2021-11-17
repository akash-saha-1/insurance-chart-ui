import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import InsuranceList from "./components/InsuranceList/InsuranceList";
import Graph from "./components/Graph/Graph";
import SearchResult from "./components/SearchResult/SearchResult";
import EditInsurance from "./components/EditInsurance/EditInsurance";

function App() {
  let routes = (
    <Switch>
      <Route path="/insurance-list">
        <InsuranceList />
      </Route>
      <Route path="/graph">
        <Graph />
      </Route>
      <Route path="/search">
        <SearchResult />
      </Route>
      <Route path="/insurance-edit/:id" component={EditInsurance}></Route>
      <Redirect to="/insurance-list?page=1" />
    </Switch>
  );

  return (
    <Router>
      <div className="">
        <Header />
        <div className="col-12 body">{routes}</div>
        <footer className="page-footer font-small">
          <div className="footer-copyright text-center py-2">
            © 2021 Copyright:
            <a href="https://insurancechart.com/"> InsuranceChart.com</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
