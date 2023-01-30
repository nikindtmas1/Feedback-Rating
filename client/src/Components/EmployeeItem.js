import React, {useContext} from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

const EmployeeItem = ({item}) => {
    const { isAuth, editEmployee } = useContext(FeedbackContext);

  return (
    <Card>

        {isAuth ? (
            <div style={{width: '280px'}}>
                <input style={{padding: '2px'}} type="checkbox" />
                <button type='button' className='close'>
                    <FaTimes color='red'/>
                </button>
                <button type='button' className='edit' onClick={() => editEmployee(item)}>
                    <FaEdit color='purple'/>
                </button>
            </div>

        ) : null
    }
    <div className='text-display'>{item.title}</div>
    </Card>
  );
};

export default EmployeeItem