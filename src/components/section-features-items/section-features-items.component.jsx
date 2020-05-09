import React, { Component } from 'react';
import FEATURES_DATA from './features.data';
import FeatureItem from '../section-features-item/features-item.component';
class SectionFeaturesItems extends Component {
    constructor(){
        super();
        this.state= {
            collections: FEATURES_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='row'>
            {collections.map(({id, ...otherColletionProps})=>{
                return(
                    <FeatureItem key={id} {...otherColletionProps}/>
                )
            })
             }
            </div>
        )
    }

}

export default SectionFeaturesItems;