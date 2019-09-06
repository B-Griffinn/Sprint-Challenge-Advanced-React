import React from 'react';

const Players = ({ pName, pCountry, pSearches, pId }) => {
    return (       
    <div className="col s12 m7">
        <h2 className="header">{pName}</h2>
            <div className="card horizontal">
                    <div className="card-image">
                        <img src="" />
                    </div>
                    <div className="card-stacked">
                    <div className="card-content">
                        <p>I am from {pCountry}</p>
                        <p>Searches: {pSearches}</p>
                        <p>{pId}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Players;
