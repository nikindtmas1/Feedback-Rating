import { useEffect, useContext } from "react";
import { FeedbackContext } from "../../context/FeedbackContext";
import { useHistory } from "react-router-dom";
import * as service from "../services/data";

const Logout = () => {
  const history = useHistory();
  const { feedbackByName, onLogout } = useContext(FeedbackContext);
  const peopleName = "start";

  useEffect(() => {
    service
      .logout()
      .then(() => feedbackByName(peopleName))
      .then(() => onLogout(), history.push("/"));
  }, [peopleName, history, feedbackByName, onLogout]);

  return null;
};

export default Logout;
