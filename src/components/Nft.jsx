import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nft({ nft }) {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = () => {
        navigate('/nftData');
    }

    const handleImageLoad = () => {
        setIsLoading(false);
    }

    const handleBuy = (event) => {
        event.preventDefault();
        // Implement the buy functionality
        // ...
    }

    return (
        <div className="max-w-[250px] bg-slate-900 text-slate-300 hover:bg-slate-700 rounded-xl z-10">
            <a href="#" className="block rounded-lg border-slate-800 p-4">
                <img
                    alt="NFT"
                    src={nft.image}
                    className={`h-56 w-[224px] rounded-md object-cover ${isLoading ? 'animate-pulse' : ''}`}
                    onLoad={handleImageLoad}
                />

                <div className="mt-2">
                    <div className='flex flex-row justify-between pt-2 my-auto'>
                        <div>
                            <div className="text-sm text-gray-500">#{nft.nftId}</div>
                            <div className="font-medium">{nft.price === 0 ? '-' : nft.price}</div>
                        </div>
                        <div>
                            <button className='py-2 px-6 bg-slate-500 border-2 border-slate-500 hover:bg-green-700 hover:border-green-700 font-bold rounded-lg z-20' onClick={handleBuy}>Buy</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
