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
                <div className="flex justify-center items-center">
                    <img className="rounded-full overflow-hidden border-2 border-white shadow h-24 w-24 object-cover" src="/profile.png" alt="Profile"/>
                </div>
                <div className="p-2 flex flex-col items-center">
                    <div className="flex justify-center items-center pb-2">
                        <a href="https://github.com/aleksandar-b" alt="github" className="no-underline mr-2" target="_blank">
                            <img height="18" width="18" src="https://unpkg.com/simple-icons@latest/icons/github.svg" />
                        </a>
                        <a href="https://twitter.com/aleksandar874" alt="twitter" className="no-underline mr-2" target="_blank">
                            <img height="18" width="18" src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" />
                        </a>
                        <a href="https://codepen.io/idx" alt="twitter" className="no-underline mr-2" target="_blank">
                            <img height="18" width="18" src="https://unpkg.com/simple-icons@latest/icons/codepen.svg" />
                        </a>
                    </div>

                    <h1 className="text-4xl tracking-wide font-bold"><span className="font-light">I'm</span> <span>Alex</span> </h1>
                    <p className="text-lg font-bold">Web developer in Belgrade</p>
                    <p className="text-sm py-4">
                        <a href="#" alt="buy" className="no-underline mr-2 cursor-text">
                            <span role="image" aria-labelledby="Coffee">☕️</span>
                            Full Stack Developer
                        </a>
                    </p>
                </div>
            </div>
        </div>);

export default ProfileCard;