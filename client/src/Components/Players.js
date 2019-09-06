import React from 'react';

const Players = ({ pName, pCountry, pSearches, pId }) => {
    return (
        <div className="player-wrapper">     
    <div className="col s12 m7">
        <h2 className="header">{pName}</h2>
            <div className="card horizontal">
                    <div className="card-image">
                        <img src="" />
                    </div>
                    <div className="card-stacked dark-mode">
                    <div className="card-content dark-mode">
                        <p className="dark-mode">I am from {pCountry}</p>
                        <p className="dark-mode">Searches: {pSearches}</p>
                        <p className="dark-mode">{pId}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                </div>
            </div>
        </div>
    </div>
    </div>  
    )
}

export default Players;
