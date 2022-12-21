import "./App.css";
import { Route } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./Components/Header";
import LoginPage from "./Components/pages/LoginPage";
import Dashboard from "./Components/pages/Dashboard";
import Logout from "./Components/pages/Logout";

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
      <Header />
        <header className="App-header">
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={Logout} />
        </header>
      </div>
    </FeedbackProvider>
  );
}

export default App;
