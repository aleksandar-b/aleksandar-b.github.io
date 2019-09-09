import React from 'react'
import {MaterialDivider} from "./ProfileCard";
import GalleryListItem from './GalleryListItem';

const sites = [
    {
        name: "Background Generator",
        href: "https://material-circles-version.now.sh",
        src: "https://i.imgur.com/LRBWkGg.jpg"
    },
    {
        name: "Player SoundlCloud",
        href: "https://aleksandar-b.github.io/ios-soundcloud-graphic/",
        src: "https://i.imgur.com/a53o396.jpg"
    },
    {
        name: "React Chart",
        href: "https://aleksandar-b.github.io/react-chart/",
        src: "https://i.imgur.com/PUFikJ0.png"
    },
    {
        name: "Stock Chart",
        href: "https://young-bayou-6286.herokuapp.com/",
        src: "https://i.imgur.com/gjGHpQI.png?1"
    },
    {
        name: "Thunder Tour JS",
        href: "https://aleksandar-b.github.io/thunderTour.github.io/",
        src: "https://i.imgur.com/ocUWK6S.png?1"
    },
    {
        name: "Gitter Theme Chrome Extension",
        href: "https://chrome.google.com/webstore/detail/gitter-theme/ifaicponoilpicblgognmpkjmdjplbhl",
        src: "https://lh3.googleusercontent.com/mwnoZPMEDFuEwHqUf4HNiCBeS5czCEKjzJr8Gth6DXzRewhBnnzpk8jdpeWzdNlHy5fYDH0Vkg=w640-h400-e365"
    },
    {
        name: "New Tab Chrome Extension",
        href: "https://chrome.google.com/webstore/detail/new-tab/mjipgaojmbpfpkaglbcdkbhcfncichip",
        src: "https://lh3.googleusercontent.com/F0jtuYlhkvvOUDuUKltk9V5vbVD_QyzbKew-is1MxM22XydEPNNhK_E1USyrHMAOVJ5n_jtaQA=w640-h400-e365"
    },
    {
        name: "Spinning Globe",
        href: "https://codepen.io/samosale/full/WrmzBr",
        src: "https://i.imgur.com/wK4P7EZ.png"
    },
    {
        name: "Occupations in Serbia",
        href: "https://codepen.io/samosale/full/YyrLwo/",
        src: "https://i.imgur.com/FwaOOiW.png?1"
    },
    {
        name: "TwitchTv",
        href: "https://codepen.io/samosale/full/KdPBeE/",
        src: "https://i.imgur.com/WMfb9IR.png?1"
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
        src: "https://i.imgur.com/qvjJta7.png?1"
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
        src: "https://i.imgur.com/dXcIqhR.png"
    },
    {
        name: "Weather forecast",
        href: "https://codepen.io/samosale/full/KdPMMr",
        src: "https://i.imgur.com/Y1Nvk4r.png?1"
    },
    {
        name: "Simon Game",
        href: "https://codepen.io/samosale/full/XmgdjK",
        src: "https://i.imgur.com/tSfHr69.png"
    },
    {
        name: "Random Quote Machine",
        href: "https://codepen.io/samosale/full/VvZwvm",
        src: "https://i.imgur.com/g5Sq89g.png?1"
    },
    {
        name: "Basic Form",
        href: "https://fcc-survey-form-cdab.glitch.me",
        src: "https://i.imgur.com/KKHyC4Q.png"
    }
];

const Gallery = () => (
    <section className="pb-24 pt-12 md:pt-24 flex justify-center z-10 w-full gallery bg-fixed px-24" style={{ position: 'absolute' }}>
        <div className="flex flex-col clearfix h-screen w-2/6 ">
            <div className="flex justify-center">
                <h3 className="font-bold text-6xl mb-2 text-white uppercase" itemProp="Experiments">Experiments</h3>
            </div>
            <MaterialDivider/>
            <div className="flex flex-wrap shadow-lg">
            {sites.map((site) => (
                    GalleryListItem(site)
            )
            )}
            </div>
        </div>
    </section>);


export default Gallery