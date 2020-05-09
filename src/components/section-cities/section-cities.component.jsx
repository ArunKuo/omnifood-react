import React from 'react';
import SectionCititesItems from '../section-cities-items/section-cities-items';
import './section-cities.style.css';

const SectionCites = () => {
    return(
        <section className="section-cities">
            <div className="row">
                <h2>We're currently in these cities</h2>
            </div>
            <SectionCititesItems />
        </section>
    )
}

export default SectionCites;