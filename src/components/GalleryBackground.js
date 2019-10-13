import React from 'react'

const GalleryBackground = props => (
    <svg
        overflow="hidden"
        style={{
            width: '100%',
            height: '100%',
            zIndex: '-1',
            position: 'absolute',
            transformOrigin: '0 center',
        }}
        {...props}
    >
        <style/>

        <g transform="rotate(-14)">
            <rect
                x="37.5%"
                y="82.353%"
                width="37.5%"
                height="5.882%"
                stroke="#FFD200"
                fill="#FFD200"
            />
            <rect
                x="87.5%"
                y="64.706%"
                width="0%"
                height="5.882%"
                stroke="#FFD200"
                fill="#00C6FF"
            />

            <rect
                x="57.5%"
                y="70.588%"
                width="37.5%"
                height="5.882%"
                stroke="#FFD200"
                fill="#FFD200"
            />
            <rect
                x="-3.5%"
                y="5.882%"
                width="47.5%"
                height="5.882%"
                stroke="#FFD200"
                fill="#FFD200"
            />

            <rect
                x="47.5%"
                y="120.588%"
                width="37.5%"
                height="5.882%"
                stroke="#FFD200"
                fill="#000"
            />

            <rect
                x="-3.5%"
                y="45.882%"
                width="47.5%"
                height="5.882%"
                stroke="#FFD200"
                fill="#000"
            />

            <rect
                x="-30.5%"
                y="95%"
                width="57.5%"
                height="5.882%"
                stroke="#FFD200"
                fill="#FFD200"
            />


        </g>
    </svg>)

export default GalleryBackground
