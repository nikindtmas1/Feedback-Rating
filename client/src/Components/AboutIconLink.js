import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const AboutIconLink = () => {
  const {isAuth} = useContext(FeedbackContext);

  return (
    isAuth === false ?
    <div className="about-link">
      <Link to={"/login"}>
        <FaLightbulb size={30} />
      </Link>
    </div>
    : null
  );
};

export default AboutIconLink;
