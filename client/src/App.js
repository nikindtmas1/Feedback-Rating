import "./App.css";
import { Route, Switch } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./Components/Header";
import LoginPage from "./Components/pages/LoginPage";
import Dashboard from "./Components/pages/Dashboard";
import Logout from "./Components/pages/Logout";
import EmployeesPage from "./Components/pages/EmployeesPage";

import GuestRoute from "./Components/GuestRoute";

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
            <Route path="/logout" component={Logout} />
            <Route path="/employees" component={EmployeesPage} />
            <GuestRoute path='/login' children={<LoginPage />} />
            {/* <Route path="/login" component={LoginPage} />   */}
          </Switch>
        </body>
      </div>
    </FeedbackProvider>
  );
}

export default App;
