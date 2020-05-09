import React from 'react';
import PlanItem from '../section-plans-item/section-plan-item';
import PLANS_DATA from './section-plans.data';

class SectionPlansItems extends React.Component {
    constructor(){
        super();
        this.state= {
            collections: PLANS_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='row'>
                {
                    collections.map(({id, ...otherCollectionProps})=>{
                        return(
                            <PlanItem  key={id} {...otherCollectionProps}/>
                        )
                    })
                }
            </div>            
        )
    }

}

export default SectionPlansItems;