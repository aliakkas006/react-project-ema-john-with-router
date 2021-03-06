import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SignIn from './components/SignIn/SignIn';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/shop">
              <Shop />
            </Route>

            <Route path="/review">
              <OrderReview />
            </Route>

            <PrivateRoute path="/inventory">
              <Inventory />
            </PrivateRoute>

            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>

            <PrivateRoute path="/placeorder">
              <PlaceOrder />
            </PrivateRoute>

            <Route path="/signin">
              <SignIn />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
