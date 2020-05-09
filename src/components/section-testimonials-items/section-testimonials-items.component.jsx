import React from 'react';
import TESTIMONIALS_DATA from './testimonials.data';
import TestimonialsItem from '../section-testimonials-item/section-testimonials-item';

class SectionTestimonialsItems extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: TESTIMONIALS_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="row">
                {
                    collections.map(({id, ...otherCollectoinsProps})=>{
                        return(
                            <TestimonialsItem key={id} {...otherCollectoinsProps} />
                        )
                    })
                }
            </div>
        )
    }
}

export default SectionTestimonialsItems;