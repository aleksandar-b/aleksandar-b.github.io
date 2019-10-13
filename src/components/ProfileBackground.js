import React from 'react'

const ProfileBackground = props => (
    <svg
        style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            willChange: 'transform',
            transformOrigin: 0,
            background: 'linear-gradient(to right,#f7971e ,#ffd200)',
        }}
        className="z-0"
        overflow="hidden"
        {...props}
    >
        { props.animate && (<style>
            {
                '@-webkit-keyframes circle-small-scale{0%{-webkit-transform:scale(1)}to{-webkit-transform:scale(1.1)}}@-moz-keyframes circle-small-scale{0%{-moz-transform:scale(1)}to{-moz-transform:scale(1.1)}}@keyframes circle-small-scale{0%{transform:scale(1)}to{transform:scale(1.1)}}.prefix__puls{-webkit-animation:circle-small-scale 3s ease-in-out infinite alternate;-moz-animation:circle-small-scale 3s ease-in-out infinite alternate;animation:circle-small-scale 3s ease-in-out infinite alternate;animationTimingFunction:cubic-bezier(.6,0,.4,1);transform-origin:center}'
            }
        </style>)}
        <rect
            x="0%"
            y="41.176%"
            width="25%"
            height="5.882%"
            stroke="#F7971E"
            fill="#F7971E"
        />
        <rect
            x="75%"
            y="29.412%"
            width="0%"
            height="5.882%"
            stroke="#F9A51B"
            fill="#F9A51B"
        />
        <rect
            x="12.5%"
            y="88.235%"
            width="12.5%"
            height="5.882%"
            stroke="#FAB117"
            fill="#FAB117"
        />
        <rect
            x="50%"
            y="70.588%"
            width="37.5%"
            height="5.882%"
            stroke="#FCBD13"
            fill="none"
        />
        <rect
            x="12.5%"
            y="58.824%"
            width="37.5%"
            height="5.882%"
            stroke="#FDC80D"
            fill="none"
        />
        <rect
            x="62.5%"
            y="70.588%"
            width="25%"
            height="5.882%"
            stroke="#FFD200"
            fill="none"
        />
        <rect
            x="87.5%"
            y="17.647%"
            width="0%"
            height="5.882%"
            stroke="#FFD200"
            fill="none"
        />
        <circle
            r="60%"
            stroke="#ffd200"
            className="prefix__puls"
            style={{
                animation: 'circle-small-scale 3s ease-in-out 1.2s infinite alternate',
            }}
            fill="none"
            cx="50%"
            cy="50%"
        />
        <circle
            r="50%"
            stroke="#fdc50f"
            className="prefix__puls"
            style={{
                animation:
                    'circle-small-scale 3s ease-in-out .8999999999999999s infinite alternate',
            }}
            fill="#fdc50f"
            cx="50%"
            cy="50%"
        />
        <circle
            r="40%"
            stroke="#fbb715"
            className="prefix__puls"
            style={{
                animation: 'circle-small-scale 3s ease-in-out .6s infinite alternate',
            }}
            fill="none"
            cx="50%"
            cy="50%"
        />
        <circle
            r="30%"
            stroke="#f9a81a"
            className="prefix__puls"
            style={{
                animation: 'circle-small-scale 3s ease-in-out .3s infinite alternate',
            }}
            fill="#f9a81a"
            cx="50%"
            cy="50%"
        />
        <circle
            r="20%"
            stroke="#f7971e"
            className="prefix__puls"
            style={{
                animation: 'circle-small-scale 3s ease-in-out 0s infinite alternate',
            }}
            fill="#f7971e"
            cx="50%"
            cy="50%"
        />
    </svg>
)

export default ProfileBackground
