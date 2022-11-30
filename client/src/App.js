// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
//import RatingBar from "./Components/RatingBar";
//import TextCometn from "./Components/TextCometn";
import CatalogFeedback from "./Components/CatalogFeedback";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./Components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <p>Feedback App</p>
            {/* <RatingBar /> */}
            <FeedbackForm />
            {/* <TextCometn /> */}
            <CatalogFeedback />
            {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          </header>
        </div>
        <AboutIconLink />
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
