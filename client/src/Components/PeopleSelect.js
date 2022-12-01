import React from "react";

const SelectPeople = () => {

    return (
        <select style={{width: 140, color: 'blue', borderRadius: "10px", padding: "3px"}}>
            <option style={{textAlign: "center"}}>Gosho</option>
            <option style={{textAlign: "center"}}>Tosho</option>
            <option style={{textAlign: "center"}}>Pesho</option>
            <option style={{textAlign: "center"}}>Tomi</option>
        </select>
    );
};

export default SelectPeople;