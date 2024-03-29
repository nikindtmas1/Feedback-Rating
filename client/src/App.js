import "./App.css";
import { Route, Switch } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./Components/Header";
import LoginPage from "./Components/pages/LoginPage";
import Dashboard from "./Components/pages/Dashboard";
import Logout from "./Components/pages/Logout";
import EmployeesPage from "./Components/pages/EmployeesPage";

import GuestRoute from "./Components/GuestRoute";
import UserRoute from "./Components/UserRoute";

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <header >
          <Header />
        </header>
        <body className="app-body">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <UserRoute path='/logout' children={<Logout />} />
            <UserRoute path='/employees' children={<EmployeesPage />} />
            <GuestRoute path='/login' children={<LoginPage />} />
          </Switch>
        </body>
      </div>
    </FeedbackProvider>
  );
}

export default App;
