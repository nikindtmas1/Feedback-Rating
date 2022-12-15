import "./App.css";
import { BrowserRouter } from "react-router-dom";

import CatalogFeedback from "./Components/CatalogFeedback";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./Components/AboutIconLink";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
           <Header />
        <div className="App">
          <header className="App-header">
            {/* <p>Health&Relax Center Feedbacks</p> */}
            <FeedbackForm />
            <FeedbackStats />
            <CatalogFeedback />
          </header>
        </div>
        <AboutIconLink />
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
