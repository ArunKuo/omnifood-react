import React from 'react';

const TestimonialsItem = ({id,content,name,avatarUrl})=>{
    return(
        <div className="col span-1-of-3">
            <blockquote>
                {content}
        <cite><img src={avatarUrl} alt={name} />{name}</cite>
            </blockquote>

        </div>
    )
};

export default TestimonialsItem;