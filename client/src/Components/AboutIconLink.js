import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to={"/login"}>
        <FaLightbulb size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
