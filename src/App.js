import React, { createContext, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyEvents from "./components/MyEvents/MyEvents";
import Admin from "./components/Admin/Admin";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import CommingSoon from "./components/ErrorPage/CommingSoon";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoutepath='/admin'>
            <Admin></Admin>
          </PrivateRoute>

          <Route path='/createEvent'>
            <CreateEvent></CreateEvent>
          </Route>

          <PrivateRoute path='/myEvents'>
            <MyEvents></MyEvents>
          </PrivateRoute>

          <PrivateRoute path='/register/:id'>
            <Register></Register>
          </PrivateRoute>

          <Route path='/commingSoon'>
            <CommingSoon></CommingSoon>
          </Route>

          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
