import React from 'react';
import CityItem from '../section-cities-item/section-cities-item';
import CITIES_DATA from './citie.data';


class SectionCititesItems extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: CITIES_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="row">
                {
                    collections.map(({id, ...ortherColletionsProps})=>{
                        return(
                            <CityItem key={id} {...ortherColletionsProps} />
                        )
                    })
                }
            </div>
        )
    }
};

export default SectionCititesItems;