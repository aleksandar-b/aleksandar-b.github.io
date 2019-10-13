import React from 'react'
import {MaterialDivider} from "./ProfileCard";
import GalleryCard from './GalleryCard';
import GalleryBackground from "./GalleryBackground";

const sites = [
    {
        name: "Background Generator",
        href: "https://material-circles-version.now.sh",
        src: "1.png"
    },
    {
        name: "Player SoundlCloud",
        href: "https://aleksandar-b.github.io/ios-soundcloud-graphic/",
        src: "2.jpg"
    },
    {
        name: "React Chart",
        href: "https://aleksandar-b.github.io/react-chart/",
        src: "3.png"
    },
    {
        name: "Stock Chart",
        href: "https://young-bayou-6286.herokuapp.com/",
        src: "4.png"
    },
    {
        name: "Thunder Tour JS",
        href: "https://aleksandar-b.github.io/thunderTour.github.io/",
        src: "5.png"
    },
    {
        name: "Gitter Theme Chrome Extension",
        href: "https://chrome.google.com/webstore/detail/gitter-theme/ifaicponoilpicblgognmpkjmdjplbhl",
        src: "https://lh3.googleusercontent.com/mwnoZPMEDFuEwHqUf4HNiCBeS5czCEKjzJr8Gth6DXzRewhBnnzpk8jdpeWzdNlHy5fYDH0Vkg=w320-h200-e365"
    },
    {
        name: "New Tab Chrome Extension",
        href: "https://chrome.google.com/webstore/detail/new-tab/mjipgaojmbpfpkaglbcdkbhcfncichip",
        src: "https://lh3.googleusercontent.com/F0jtuYlhkvvOUDuUKltk9V5vbVD_QyzbKew-is1MxM22XydEPNNhK_E1USyrHMAOVJ5n_jtaQA=w320-h200-e365"
    },
    {
        name: "Spinning Globe",
        href: "https://codepen.io/samosale/full/WrmzBr",
        src: "6.png"
    },
    {
        name: "Occupations in Serbia",
        href: "https://codepen.io/samosale/full/YyrLwo/",
        src: "8.png"
    },
    {
        name: "TwitchTv",
        href: "https://codepen.io/samosale/full/KdPBeE/",
        src: "12.png"
    },
    {
        name: "Sine Wave",
        href: "https://codepen.io/samosale/full/Rrjdwd",
        src:
            "https://45.media.tumblr.com/1789b63316899d072a23db31f6aec0c4/tumblr_mi301zN7vJ1s5nl47o1_500.gif"
    },
    {
        name: "Animated chart",
        href: "https://codepen.io/samosale/full/ZQZvzL",
        src: "https://i.imgur.com/M8W8Bxl.png?1"
    },
    {
        name: "Wiki Viewer",
        href: "https://codepen.io/samosale/full/WQrxQv/",
        src: "10.png"
    },
    {
        name: "FCC News",
        href: "https://codepen.io/samosale/full/rOOPgy",
        src: "https://i.imgur.com/u3n3kkq.png"
    },
    {
        name: "Calculator",
        href: "http://zanimanja.tk/",
        src: "https://i.imgur.com/E7mk5Uq.png?1"
    },
    {
        name: "Chart in motion",
        href: "https://codepen.io/samosale/full/RrxQQy",
        src: "https://i.imgur.com/KV8L4jw.png?1"
    },
    {
        name: "Tic Tac Toe Game",
        href: "https://codepen.io/samosale/full/garjWZ",
        src: "https://i.imgur.com/Ne8CqS4.png?1"
    },
    {
        name: "Real Time Chart",
        href: "https://codepen.io/samosale/full/wKZVJx",
        src: "https://i.imgur.com/4Kc7vbV.png?1"
    },
    {
        name: "SVG animation",
        href: "https://codepen.io/samosale/full/KVBzXX",
        src: "https://i.imgur.com/UfsOUP0.png?1"
    },
    {
        name: "Pomodoro clock",
        href: "https://codepen.io/samosale/full/avowWO",
        src: "7.png"
    },
    {
        name: "Weather forecast",
        href: "https://codepen.io/samosale/full/KdPMMr",
        src: "https://i.imgur.com/Y1Nvk4r.png?1"
    },
    {
        name: "Simon Game",
        href: "https://codepen.io/samosale/full/XmgdjK",
        src: "11.png"
    },
    {
        name: "Random Quote Machine",
        href: "https://codepen.io/samosale/full/VvZwvm",
        src: "https://i.imgur.com/g5Sq89g.png?1"
    },
    {
        name: "Basic Form",
        href: "https://fcc-survey-form-cdab.glitch.me",
        src: "9.png"
    }
];

const Gallery = () => (
    <section className="gallery-bcg bg-fixed h-screen snap flex flex-col items-center">
        <GalleryBackground/>
        <h3 style={{display: 'inline', backgroundColor: "#FFD200"}} className="font-bold h-32 text-2xl md:text-6xl mb-2 text-white uppercase md:pt-12 rounded">Experiments</h3>
        <MaterialDivider/>
        <div className="flex flex-wrap shadow-2xl md:mt-6 md:w-1/2 w-full rounded overflow-hidden">
            {sites.map((site, idx) => GalleryCard(site, idx))}
        </div>
    </section>);


export default Gallery