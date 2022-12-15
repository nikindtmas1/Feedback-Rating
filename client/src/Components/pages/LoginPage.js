import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";


const LoginPage = () => {

  const history = useHistory();
  const {feedbackByName} = useContext(FeedbackContext);
  const peopleName = 'start';

  const handleSubmit = (e) => {
    e.preventDefault();
    feedbackByName(peopleName);
    history.push('/');
  };

  return (
    <Card>
      <div className="text-container">
        <div className="text-content">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" name="userLogin" placeholder="User Name" />
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <button 
              type="submit"
              style={{
                padding: '10px',
                margin: '10px',
                width: '500px',
                backgroundColor: 'rgb(45, 179, 206)',
                color: 'white',
                borderRadius: '10px'
              }}
              >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default LoginPage;
