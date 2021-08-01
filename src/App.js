import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AlertMsg from "./components/AlertMsg";
import SearchPage from "./pages/SearchPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Catogories from "./components/Catogories";
import DetailCategoryPage from "./pages/DetailCategoryPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.login)
  return (

    <Router>
      <PublicNavbar />
      <Catogories />
      <AlertMsg />
      <Switch>
        <Route exact path="/products/:id" component={ProductDetailPage} />
        <Route exact path="/category/:id" component={DetailCategoryPage} />
        <Route exact path="/auth/register" component={SignUpPage} />
        <Route exact path="/auth/login" component={LogInPage} />
        <Route exact path="/cart" component={ isLoggedIn ? CartPage : LogInPage} />
        <Route path="/payment" component={ isLoggedIn ? PaymentPage : LogInPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:search" component={SearchPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
