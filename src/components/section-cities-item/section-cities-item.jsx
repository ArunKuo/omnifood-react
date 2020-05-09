import React from 'react';

const CityItem = ({id,city,imageUrl,eaters,chefs,twitter}) =>{
    return (
        <div className="col span-1-of-4 box">
            <img src={imageUrl} alt={city} />
            <h3>{city}</h3>
            <div className="city-feature">
                <i className="ion-ios-person icon-small"></i>
                {eaters}
            </div>
            <div className="city-feature">
                <i className="ion-ios-star icon-small"></i>
                {chefs}  
            </div>
            <div className="city-feature">
                <i className="ion-social-twitter icon-small"></i>
                <a href="/">{twitter}</a>
            </div>
        </div>
    )
}

export default CityItem;