import React from 'react';
const FeatureItem = ({id, logo,title,content}) =>{
    return(        
            <div className="col span-1-of-4 box">
                <i className= {`icon-big ${logo}`}  />
                <h3>{title}</h3>
                <p>
                    {content}
                </p>
            </div>   
    )
}

export default FeatureItem;
