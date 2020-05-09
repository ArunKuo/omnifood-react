import React from 'react';
import MEALS_DATA from './MEALS_DATA';

class SectionMealsItem extends React.Component {
    constructor(){
        super();
        this.state={
            collections: MEALS_DATA
        };
    }

    render(){
        const {collections} =this.state;        
        return(
            <section className="section-meals">
                <ul className="meals-showcase">
                {
                    collections
                    .filter((item,idx)=> idx <4)
                    .map(({id, imageUrl,alt})=>{
                        return(
                            <li key={id} className="meal-photo">
                                <img key={id} src={imageUrl} alt={alt} />
                            </li>
                        )
                    })
                }
                 </ul>
                 <ul className="meals-showcase clearfix">
                {
                    collections
                    .filter((item,idx)=> idx >=4)
                    .map(({id, imageUrl,alt})=>{
                        return(
                            <li key={id} className="meal-photo">
                                <img key={id} src={imageUrl} alt={alt} />
                            </li>
                        )
                    })
                }
                 </ul>

            </section>


        )
      }

}

export default SectionMealsItem;