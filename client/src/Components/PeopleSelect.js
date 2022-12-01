import React, {useContext, useState} from "react";
import { FeedbackContext } from "../context/FeedbackContext";



const SelectPeople = () => {

    const {addName, fetchFeedback} = useContext(FeedbackContext);


    
   const onClick = (e) => {

    addName('gosho')
    fetchFeedback();
   
   
   };


    return (
        <>
        <select style={{width: 140, color: 'blue', borderRadius: "10px", padding: "3px"}}>
            <option style={{textAlign: "center"}}>Gosho</option>
            <option style={{textAlign: "center"}}>Tosho</option>
            <option style={{textAlign: "center"}}>Pesho</option>
            <option style={{textAlign: "center"}}>Tomi</option>
            
        </select>
        <button style={{borderRadius: '5px'}} type="button" onClick={onClick}>Submit</button>
        </>
    );
};

export default SelectPeople;