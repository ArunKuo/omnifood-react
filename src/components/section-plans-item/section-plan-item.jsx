import React from 'react';

const PlanItem = ({id,title,price,subtitle,content1,content2,content3,content4,check}) =>{
    return(
        <div className="col span-1-of-3">
            <div className="plan-box">
                <div>
                    <h3>{title}</h3>
                    <p className="plan-price">{price}<span>/ month</span></p>
                    <p className="plan-price-meal">{subtitle ? subtitle : <br/>}</p>
                </div>
                <div>
                     <ul>
                        <li><i className="ion-ios-checkmark-empty icon-small"></i>{content1}</li>
                        <li><i className="ion-ios-checkmark-empty icon-small"></i>{content2}</li>
                        <li><i className={check}></i>{content3}</li>
                        <li><i className="ion-ios-checkmark-empty icon-small"></i>{content4}</li>
                    </ul>
                </div> 
                <div>
                    <a href="/" className="btn btn-full">Sign up now</a>
                </div>          
            </div>
            
        
        </div>
    )
}

export default PlanItem;