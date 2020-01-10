import React from 'react';

export const MaterialDivider = ({styles}) => <div className="mx-auto" style={{
    width: '150px',
    height: '1px',
    backgroundColor: 'white',
    opacity: '0.5',
    ...styles
}}>

</div>;

const ProfileCard = () =>
    (
        <div className="z-10 mx-auto flex">
            <div className="flex flex-col">
                <div className="p-2 flex flex-col items-center">
                    <h1 className="text-3xl tracking-wide leading-relaxed px-4 "><span className="font-hairline text-gray-800">I'm</span> <span className="font-hairline">Alex</span> </h1>
                    <p className="text-lg font-hairline">Web developer in Belgrade</p>
                    <p className="text-sm py-4 w-2/3 text-center">
                        <a href="#" className="no-underline mr-2 cursor-text font-hairline text-gray-800">
                            FullStack Developer with over 5 years of experience building web apps using React, Node, Golang.
                        </a>
                    </p>
                    <div className="flex justify-center items-center pb-2">
                        <a href="https://github.com/aleksandar-b" className="no-underline mr-2" target="_blank">
                            <img alt="github" height="18" width="18" src="github.svg" />
                        </a>
                        <a href="https://twitter.com/aleksandar874" className="no-underline mr-2" target="_blank">
                            <img alt="twitter" height="18" width="18" src="/twitter.svg" />
                        </a>
                        <a href="https://codepen.io/idx" className="no-underline mr-2" target="_blank">
                            <img alt="codepen" height="18" width="18" src="codepen.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>);

export default ProfileCard;