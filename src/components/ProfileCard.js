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
                <div className="p-6 flex flex-col items-center">
                    <h1 className="text-4xl tracking-wide font-bold pb-4"><span className="font-light">I'm</span> <span>Alex</span> </h1>
                    <p className="text-lg font-bold">Web developer in Belgrade</p>
                    <p className="text-sm py-4">
                        <a href="#" alt="buy" className="no-underline mr-2">
                            <span role="image" aria-labelledby="Coffee">☕️</span>
                            Coffee developer
                        </a>
                        <a href="https://twitter.com/aleksandar874" className="no-underline text-grey-darkest">
                            <span><svg className="inline" width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335 276" fill="#3ba9ee">
                                <path d="m302 70a195 195 0 0 1 -299 175 142 142 0 0 0 97 -30 70 70 0 0 1 -58 -47 70 70 0 0 0 31 -2 70 70 0 0 1 -57 -66 70 70 0 0 0 28 5 70 70 0 0 1 -18 -90 195 195 0 0 0 141 72 67 67 0 0 1 116 -62 117 117 0 0 0 43 -17 65 65 0 0 1 -31 38 117 117 0 0 0 39 -11 65 65 0 0 1 -32 35"/>
                            </svg></span>Js developer
                        </a>
                    </p>
                </div>
            </div>
        </div>);

export default ProfileCard;