import React, {useContext, useState} from "react";
import { FeedbackContext } from "../context/FeedbackContext";



const SelectPeople = () => {

    const {addName, fetchFeedback} = useContext(FeedbackContext);


    const onOptionChangeHandler = (e) => {
        console.log(e.target.value);
        // let currentName = e.target.value;
        // addName(currentName);

    }
//    const onClick = (e) => {
//     addName('gosho')
//     fetchFeedback();
   
   
//    };


    return (
        <>
        <select onChange={onOptionChangeHandler} style={{width: 140, color: 'blue', borderRadius: "10px", padding: "3px"}}>
            <option value='gosho' style={{textAlign: "center"}}>Gosho</option>
            <option value='tosho' style={{textAlign: "center"}}>Tosho</option>
            <option value='pesho' style={{textAlign: "center"}}>Pesho</option>
            <option value='tomi' style={{textAlign: "center"}}>Tomi</option>
            
        </select>
        {/* <button style={{borderRadius: '5px'}} type="button" onClick={onClick}>Submit</button> */}
        </>
    );
};

export default SelectPeople;