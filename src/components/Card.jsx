import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ name, floor, volume, id, image }) {

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const change = 1.23;

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleClick = () => {
        console.log(id);
        navigate(`/project/${id}`)
    }

    return (
        <div className="flex w-[350px] bg-slate-900 border-2 border-slate-800 cursor-pointer hover:border-slate-600 text-slate-300 rounded-md my-4 p-2" onClick={handleClick}>
            <div className="flex basis-5/6">
                <p className="my-auto font-bold">1</p>
                <div className={`mx-2 rounded-full w-20 h-20 ${isLoading ? 'animate-pulse bg-slate-600' : ''}`} >
                    <img className={`w-20 rounded-full mx-auto overflow-hidden ${isLoading ? 'hidden' : ''}`} src={image} alt='H' onLoad={handleImageLoad} />
                </div>
                <div className="my-auto">
                    <h2 className="font-bold">{name}</h2>
                    <p>Floor: {floor == 0 ? "  -  " : floor}</p>
                </div>
            </div>
            <div className="flex flex-col justify-end my-auto basis-1/6">
                <div className="text-green-500">+{change == 0 ? "  -  " : change}%</div>
                <div className="\">{volume == 0 ? "  -  " : volume}</div>
            </div>
        </div>
    )
}