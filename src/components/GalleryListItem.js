import React from 'react';
import BackgroundGalleryListItem from './BackgroundGalleryListItem.js'
import {MaterialDivider} from "./ProfileCard";

 const GalleryListItem = (item) =>
    <div className="w-1/4 lg:w-1/6 flex flex-col">
        <a href={item.href}
           className="no-underline flex flex-1 flex-col overflow-hidden relative">
            <div className="w-full shadow-inner bg-dark-100 bg-cover bg-top min-h-item transition hover:-scale-sm"
                 style={{
                     backgroundImage: `url(${item.src})`,
                     backgroundColor: 'rgba(247,250,250, .15)',
                     backgroundBlendMode: 'overlay'
                 }}>
            </div>
            {/*<div className="flex flex-1 border-l-2 border-blue-400 absolute top-0">*/}
            {/*    <BackgroundGalleryListItem />*/}
            {/*    <div style={{ position: 'absolute'}} className="p-3">*/}
            {/*        <h3 className="text-lg mb-2 text-gray-700" itemProp="name">{item.name}</h3>*/}
            {/*        <MaterialDivider styles={{ backgroundColor: 'blue'}}/>*/}
            {/*        <p className="leading-normal text-gray-700 text-base text-sm mt-2"*/}
            {/*           itemProp="description">Manage your teams server access with ServerAuth's easy to use SSH*/}
            {/*            Key Management Platform.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </a>
    </div>

export default GalleryListItem;