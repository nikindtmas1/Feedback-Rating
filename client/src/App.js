// import logo from './logo.svg';
import "./App.css";
import RatingBar from "./Components/RatingBar";
import TextCometn from "./Components/TextCometn";
import CatalogFeedback from "./Components/CatalogFeedback";
import FeedbackForm from "./Components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <div className="App">
        <header className="App-header">
          <p>Feedback App</p>
          <RatingBar />
          <TextCometn />
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
    </FeedbackProvider>
  );
}

export default App;
