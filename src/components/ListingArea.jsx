import { useState } from 'react';
import Hei from '../assets/hei.png'
import { connectWallet, setPurchaseNft } from '../connection/alchemyConnect'

export default function ListingArea() {

    const [projectId, setProjectId] = useState('');
    const [nftId, setNftId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleBuy = async () => {
        setIsLoading(true);
        const address = await connectWallet();
        await setPurchaseNft(1, 0).then((result) => {
            console.log(result.transactionHash)
            setEmpty();
        }).catch((error) => {
            setEmpty();
            console.error(error)
        })
    }

    const setEmpty = () => {
        setProjectId('');
        setNftId('');
        setIsLoading(false);
    }

    return (
        <div>
            <div className="flex p-20 border-2 rounded-xl border-slate-800 m-6">
                <div className="my-auto border-slate-900">
                    <img className='rounded-lg w-100' src={Hei} alt="" />
                </div>
                <div className="flex flex-col pl-10 my-auto w-[50%]">
                    <div>
                        <h1 className="font-bold text-[30px] pb-4">The Heist</h1>
                    </div>
                    <div>
                        <h1 className="flex flex-wrap pb-6">The Heist is a high-stakes, risk based game of crime, corruption and bananas. The Heist is the 2nd gaming title from web3 studio, Longwood Labs.</h1>
                    </div>
                    <div className='border-b-2 border-slate-700 mb-4 w-[90%]'></div>
                    <div>
                        <h1 className="font-bold text-[30px] pb-4">Attributes</h1>
                    </div>
                    <div className="flex gap-4 basis-1/3 mb-4 flex-wrap">
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Floor</p>
                            <p>17.71</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Volume</p>
                            <p>410K</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Supply</p>
                            <p>10,000</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Listed</p>
                            <p>125 (12.5%)</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Sales</p>
                            <p>12,000</p>
                        </div>
                    </div>
                    <div className='border-b-2 border-slate-700 my-4 w-[90%]'></div>
                    <div>
                        <h1 className="font-bold text-[30px]">Market</h1>
                    </div>
                    <div className='flex flex-col m-4 gap-4'>
                        <div>
                            <button className='py-2 px-6 bg-green-700 border-2 border-slate-800 disabled:opacity-30 disabled:border-slate-600 hover:bg-slate-600 font-bold rounded-lg' onClick={handleBuy} disabled={isLoading}>Buy @ 17.71</button>
                        </div>
                        <div className='flex gap-6'>
                            <button className='py-2 px-6 bg-red-700 border border-slate-800 hover:bg-slate-600 font-bold rounded-lg'>List</button>
                            <input type='number' className='rounded-lg text-[20px] border-2 border-slate-700 outline-none bg-slate-900 text-slate-300 py-2 px-4' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}