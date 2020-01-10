import React from 'react'
import GalleryCard from './GalleryCard';
import GalleryBackground from "./GalleryBackground";

const Gallery = () => (
    <section id="gallery" className="section relative">
        <GalleryBackground/>
        <h3 className="leading-loose px-3 md:mt-48 mt-10 text-blue-600 bg-blue-100 md:text-sm mb-4 uppercase rounded-full tracking-widest">Personal Projects</h3>
        <GalleryCard />
        <div className="mt-12 text-center flex flex-grow flex-col justify-end">
            <p className="text-gray-800 text-sm font-light">Contact Me</p>
            <div className="flex flex-row m-3">
                <div className="flex flex-row mr-2 text-xs text-gray-500 align-baseline font-light"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path className="fill-current" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><span className="text-gray-800 ml-1">+381694410428</span></div>
                <div className="flex flex-row ml-2 text-xs text-gray-500 align-baseline font-light"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path className="fill-current" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg><span className="text-gray-800 ml-1">aspireledd@gmail.com</span></div>
            </div>
        </div>
    </section>);


export default Gallery