import React from "react";
import './Card.css';

const Card = ({ name, email, id, phone}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200*200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <h3>{phone}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;