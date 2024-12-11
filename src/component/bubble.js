import React from 'react';

const Bubble = ({ bubble, text }) => {


    return (

        <div className="fixed inset-0 flex items-center justify-center z-50">
             <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
        <img
            src={bubble}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.6] z-10 "
            alt="Chat Bubble"
            loading="lazy"
        />
            <div className="absolute bg-transparent top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full my-10 w-[34rem] max-h-[40rem] overflow-y-auto flex items-center justify-center z-20 p-4">
                    <p className="text-black font-editor m-0">
                        {text}
                    </p>
            </div>
        
        </div>




    );
};

export default Bubble;
