import React from 'react';
import SectionPlansItems from '../section-plans-items/section-plans-items.component';
import './section-plans.style.css';

const SectionPlans = () =>{
    return(
        <section className="section-plans">
        <div className="row">
            <h2>Start eating healthy today</h2>
        </div>
        <SectionPlansItems />
        </section>
    )
}

export default SectionPlans;