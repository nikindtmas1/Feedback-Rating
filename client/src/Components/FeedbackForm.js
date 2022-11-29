import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
    const {addFeedback} = useContext(FeedbackContext);

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');


    useEffect(() => {
        if(text.length === 0 ){
            setBtnDisabled(true);
            setMessage('');
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        }else{
            setMessage('');
            setBtnDisabled(false);
        }
    }, [text]);

    const handleSubmit = () => {

    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };



  return (
    <Card>
    <div className="text-container">
    <div className="text-content">
    <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect selected={rating} select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange} />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
    </div>
  </div>
  </Card>
  )
}

export default FeedbackForm