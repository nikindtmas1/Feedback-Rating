import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

const FeedbackItem = ({item}) => {
  return (
    <Card>
    <div className="num-display">{}</div>
        <button type='button' onClick='' className='close'>
            <FaTimes color='purple' />
        </button>
        <button type='button' onClick='' className='edit'>
            <FaEdit color='purple'/>
        </button>
        <div className="text-display">{}</div>
        </Card>
  )
}

export default FeedbackItem