import React from 'react';

export const MaterialDivider = ({styles}) => <div style={{
    width: '150px',
    height: '1px',
    backgroundColor: '#fff',
    opacity: '0.5',
    ...styles
}}>

</div>;

const ProfileCard = () =>
    (
        <div className="z-10 mx-auto flex">
            <div className="flex flex-col md:flex-row">
                <div className="flex justify-center items-center">
                    <img className="rounded-full overflow-hidden border-4 border-white shadow h-32" src="/profile.png" alt="Profile"/>
                </div>
                <div className="p-6 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl tracking-wide font-bold pb-4"><span className="font-light">I'm</span> <span>Alex</span> </h1>
                    <p className="text-lg font-bold">Web developer in Belgrade</p>
                    <p className="text-sm py-4">
                        <a href="#" alt="buy" className="no-underline mr-2">
                            <span role="image" aria-labelledby="Coffee">☕️</span>
                            Coffee developer
                        </a>
                        <a href="https://twitter.com/aleksandar874" className="no-underline text-grey-darkest">
                            <span role="image" aria-labelledby="Cofee">⚛️</span>Js developer
                        </a>
                    </p>
                </div>
            </div>
        </div>);

export default ProfileCard;