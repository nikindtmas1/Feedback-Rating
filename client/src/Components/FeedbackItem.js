import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';

const FeedbackItem = () => {
  return (
    <div className="num-display">
        <button type='button' onClick='' className='close'>
            <FaTimes color='purple' />
        </button>
        <button type='button' onClick='' className='edit'>
            <FaEdit />
        </button>
    </div>
  )
}

export default FeedbackItem