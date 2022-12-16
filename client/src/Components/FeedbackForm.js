import React from "react";
import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import SelectPeople from "./PeopleSelect";

const FeedbackForm = () => {
  const { addFeedback, peopleName } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    if (text.length === 0 || userName.length === 0) {
      setBtnDisabled(true);
      setMessage("");
      setUserMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else if(text !== '' && text.trim().length >= 75){
        setMessage('Text must be maximum 75 characters');
        setBtnDisabled(true);
    } else if ((userName !== "" && userName.trim().length < 3) || (userName !== "" && userName.trim().length > 25)) {
      setUserMessage("Write corect name pleas!");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setUserMessage("");
      setBtnDisabled(false);
    }
  }, [text, userName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let formData = new FormData(e.currentTarget);
    let text = formData.get("text").trim();
    let userName = formData.get("userName").trim();
    let newFeedback = {
      text,
      rating,
      peopleName,
      userName,
    };

    if(peopleName === 'start'){ 
      setText('');
      setUserName('');
      setRating(10);
      return alert('Select therapist pleas!')
    };

    if(!userName.match(/([a-zA-Z]+)(\s+)([a-zA-Z]+)/)){
      setText('');
      setUserName('');
      setRating(10);
       return alert('User name is not corect!')
    }

    addFeedback(newFeedback);
    setBtnDisabled(true);
    setRating(10);
    setText("");
    setUserName("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <Card>
      <div className="text-container">
        <div className="text-content">
          <form onSubmit={handleSubmit}>
            <h2>
              How would you rate therapist ?<SelectPeople />{" "}
            </h2>
            <RatingSelect
              selected={rating}
              select={(rating) => setRating(rating)}
            />
            <div className="input-group">
              <input
                type="text"
                name="userName"
                placeholder="Write your name pleas!"
                value={userName}
                onChange={handleUserChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="text"
                placeholder="Write a review"
                value={text}
                onChange={handleTextChange}
              />
              <Button type="submit" isDisabled={btnDisabled}>
                Send
              </Button>
            </div>

            {message && <div className="message">{message}</div>}
            {userMessage && <div className="message">{userMessage}</div>}
          </form>
        </div>
      </div>
    </Card>
  );
};

export default FeedbackForm;
