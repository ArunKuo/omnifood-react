import React from 'react';
import SectionTestimonialsItems from '../section-testimonials-items/section-testimonials-items.component';
import './section-testimonials.style.css';

const SectionTestimonials = () =>{
    return(
        <section className="section-testimonials">
            <div className="row">
                <h2>Our customers can't live without us</h2>
            </div>
        <SectionTestimonialsItems />
        </section>
    )
}

export default SectionTestimonials;