import "./App.css";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Services from "./Pages/Home/Services/Services";
import Experts from "./Pages/Home/Experts/Experts";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/experts">
              <Experts></Experts>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
