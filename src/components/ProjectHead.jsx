import { useState } from 'react';
import { setListNFT } from '../connection/alchemyConnect';

export default function ProjectHead({ project }) {

    const [isLoading, setIsLoading] = useState(true);
    const [nftId, setNftId] = useState(0);
    const [price, setPrice] = useState(0);

    if (!project) {
        return null;
    }

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleClick = async () => {
        console.log('handleClick called')
        await setListNFT(project, 1, 0.01);
        console.log('handleClick ended');
    }

    return (
        <div className="flex flex-col justify-center p-20 border-2 rounded-xl border-slate-800 m-6">
            <div className='flex'>
                <div className={`my-auto border rounded-full border-slate-900 ${isLoading ? 'animate-pulse bg-slate-600' : ''}`}>
                    <img className={`border rounded-full w-40 ${isLoading ? 'hidden' : ''}`} src={project.image} alt="" onLoad={handleImageLoad} />
                </div>
                <div className="flex flex-col pl-10 my-auto">
                    <div>
                        <h1 className="font-bold text-[30px] pb-4">{project.name}</h1>
                    </div>
                    <div className="flex gap-2">
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Floor</p>
                            <p>{project.floor.toString() !== '0' ? project.floor.toString() : '-'}</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Volume</p>
                            <p>{project.volume.toString() !== '0' ? project.volume.toString() : '-'}</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Supply</p>
                            <p>{project.supply.toString() !== '0' ? project.supply.toString() : '-'}</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Listed</p>
                            <p>{project.listed.toString() !== '0' ? project.listed.toString() : '-'}</p>
                        </div>
                        <div className="py-2 px-4 bg-slate-800 border rounded-lg border-slate-800 w-fit h-fit hover:bg-slate-700">
                            <p className="font-bold">Sales</p>
                            <p>{project.sales.toString() !== '0' ? project.sales.toString() : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='flex gap-6 justify-between'>
                    <button className='py-2 px-6 bg-red-700 border border-slate-800 hover:bg-slate-600 font-bold rounded-lg' onClick={handleClick}>List your nft</button>
                    <input type='number' className='rounded-lg text-[20px] border-2 w-[30%] border-slate-700 outline-none bg-slate-900 text-slate-300 py-2 px-4' placeholder='Nft-Id' value={nftId} onChange={(e) => { setNftId(e.target.value) }} />
                    <input type='number' className='rounded-lg text-[20px] border-2 w-[30%] border-slate-700 outline-none bg-slate-900 text-slate-300 py-2 px-4' placeholder='Price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
                </div>
            </div>
        </div>
    );
}
