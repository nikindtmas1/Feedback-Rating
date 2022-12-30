import "./App.css";
import { Route } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./Components/Header";
import LoginPage from "./Components/pages/LoginPage";
import Dashboard from "./Components/pages/Dashboard";
import Logout from "./Components/pages/Logout";
//import Navbar from "./Components/Navbar";

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <header >
          <Header />
        </header>
          {/* <Navbar /> */}
        <body className="App-body">
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={Logout} />
        </body>
      </div>
    </FeedbackProvider>
  );
}

export default App;
