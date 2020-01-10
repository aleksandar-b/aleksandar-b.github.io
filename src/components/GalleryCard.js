import React from 'react';

const sites = [
    {
        name: "Background Generator",
        href: "https://material-circles-version.now.sh",
        src: "1.png"
    },
    {
        name: "Sine Wave",
        href: "https://codepen.io/samosale/full/Rrjdwd",
        src: "14.gif"
    },
    {
        name: "Player SoundlCloud",
        href: "https://aleksandar-b.github.io/ios-soundcloud-graphic/",
        src: "2.jpg"
    },
    {
        name: "Realistic Globe",
        href: "https://aleksandar-b.github.io/real-globe/",
        src: "15.png"
    },
    {
        name: "Chart in motion",
        href: "https://codepen.io/samosale/full/RrxQQy",
        src: "https://i.imgur.com/KV8L4jw.png?1"
    },
    {
        name: "Studious Doodle",
        href: "https://github.com/aleksandar-b/studious-doodle",
        src: "https://i.imgur.com/UfsOUP0.png?1"
    },
    {
        name: "React Chart",
        href: "https://aleksandar-b.github.io/react-chart/",
        src: "3.png"
    },
    {
        name: "Thunder Tour JS",
        href: "https://aleksandar-b.github.io/thunderTour.github.io/",
        src: "5.png"
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
        name: "Animated chart",
        href: "https://codepen.io/samosale/full/ZQZvzL",
        src: "https://i.imgur.com/M8W8Bxl.png?1"
    },
    {
        name: "Pomodoro clock",
        href: "https://codepen.io/samosale/full/avowWO",
        src: "7.png"
    },
    {
        name: "Random Quote Machine",
        href: "https://codepen.io/samosale/full/VvZwvm",
        src: "https://i.imgur.com/g5Sq89g.png?1"
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
        name: "Basic Form",
        href: "https://fcc-survey-form-cdab.glitch.me",
        src: "9.png"
    }
];

const GalleryCard = () => {
    return <div className="flex flex-wrap md:w-1/2 w-5/6 rounded overflow-hidden shadow-2xl">
        {sites.map((item, idx) =>
            Card(item, idx))}
    </div>
};

function Card (item, idx) {
    const [isHover, setHover] = React.useState(false);

    return <a className="block w-1/4 overflow-hidden relative min-h-item flex justify-center items-center"
              onMouseEnter={setHover}
              onMouseLeave={setHover.bind(this, false)}
              key={idx} href={item.href} target="_blank">
                <div className="absolute inset-0 bg-cover h-full transition hover:-scale-sm"
                     style={{
                         backgroundImage: `url(${item.src})`,
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                </div>
                <div className="h-auto absolute p-1 top-0 font-hairline w-full transition" style={{
                    transform: isHover ? 'translateY(0)' : 'translateY(-100%)',
                }}>
                    <div className="w-auto h-auto m-2 p-0 rounded overflow-hidden truncate text-center border-inset shadow-inset leading-loose px-3 text-blue-600 bg-blue-100 md:text-xs mb-4 uppercase rounded-full tracking-widest">
                        <span className="font-normal">{item.name}</span>
                    </div>
                </div>
            </a>
}

export default GalleryCard;