import "./App.css";
import { Route } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./Components/Header";
import LoginPage from "./Components/pages/LoginPage";
import Dashboard from "./Components/pages/Dashboard";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={LoginPage} />
        </header>
      </div>
    </FeedbackProvider>
  );
}

export default App;
