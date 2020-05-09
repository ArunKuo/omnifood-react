import React from 'react';
import SectionFeaturesItems from '../section-features-items/section-features-items.component';
import './section-features.style.css';

const SectionFeatures = ()=> { 
        return (
            <section className="section-features">
            <div className="row">
                <h2>Get food fast &mdash; not fast food.</h2>
                <p className="long-copy">
                Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for
                cooking. So let us take care of that, we’re really good at it, we promise!
            </p>
            </div>
            <SectionFeaturesItems />

            </section>
        )
}
 
export default SectionFeatures; 