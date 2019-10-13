import React from 'react';

 const GalleryCard = (item, idx) =>
    <a className="w-1/4 overflow-hidden" key={idx} href={item.href}>
        <div className="shadow-inner bg-dark-100 bg-cover min-h-item transition hover:-scale-sm"
             style={{
                 backgroundImage: `url(${item.src})`,
                 backgroundColor: 'rgba(247,250,250, .15)',
                 backgroundPosition: 'center'
             }}>
        </div>
    </a>

export default GalleryCard;